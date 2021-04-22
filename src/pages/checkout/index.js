import dayjs from 'dayjs'
import underscore from 'underscore';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from "../../components/header"
import Product from "../../components/product/list";
import { setTransaction as setStoreTransaction, makePurchase as makeStorePurchase } from '../../store/modules/shop/actions'
import "./styles.css"
const Checkout = () => {
  const dispatch = useDispatch();

  const { cart, transactionFee, defaultRecipient } = useSelector(state => state.shop);

  const [transaction, setTransaction] = useState({
    amount: 0,
    card_number: "",
    card_cvv: "",
    card_expiration_date: "",
    card_holder_name: "",
    shipping: {
      name: "",
      fee: 1000,
      delivery_date: dayjs().add(7, 'days').format('YYYY-MM-DD'),
      expedited: true,
      address: {
        country: 'br',
        state: "",
        city: "",
        neighborhood: "",
        street: "",
        street_number: "",
        zipcode: ""
      }
    },
    items: [],
    split_rules: [],
  })

  const makePurchase = () => {
    dispatch(setStoreTransaction(transaction))
    setTimeout(() => {
      dispatch(makeStorePurchase());
    }, 100)
  }

  const getSplitRules = () => {
    const productsByPetshop = underscore.groupBy(cart, (product) => product.petshop_id.recipient_id)

    let result = [];

    Object.keys(productsByPetshop).map((petshop) => {
      const products = productsByPetshop[petshop];
      const totalValuePerPetshop = products.reduce((total, product) => {
        return total + product.price;
      }, 0).toFixed(2)

      const totalFee = (totalValuePerPetshop * transactionFee)

      result.push({
        recipient_id: products[0].petshop_id.recipient_id,
        percentage: Math.floor(
          ((totalValuePerPetshop - totalFee) / total) * 100
        ),
        liable: true,
        charge_processing_fee: true
      })
    })

    const totalPetshopsPercentage = result.reduce((total, recipient) => {
      return total + parseFloat(recipient.percentage)
    }, 0)

    result.push({
      ...defaultRecipient,
      percentage: 100 - totalPetshopsPercentage
    })

    return result;
  };

  const total = cart.reduce((total, product) => {
    return total + product.price;
  }, 0);

  useEffect(() => {
    //update amount and items
    setTransaction({
      ...transaction,
      amount: total.toFixed(2).toString().replace('.', ''),
      items: cart.map((product) => ({
        id: product._id,
        title: product.name,
        unit_price: product.price.toFixed(2).toString().replace('.', ''),
        quantity: 1,
        tangible: true
      })),
      split_rules: getSplitRules()
    })

  }, [total])

  const setShippingValue = (key, value) => {
    setTransaction({
      ...transaction,
      shipping: {
        ...transaction.shipping,
        address: {
          ...transaction.shipping.address,
          [key]: value,
        }
      }
    })
  }

  return (
    <div className="h-100">
      <Header hideCart />
      <div className="container mt-4">
        <div className="row">
          <div className="col-6">
            <span className="section-title">Dados de Entrega</span>
            <div className="row mb-3">
              <div className="col-12">
                <input
                  type="text"
                  placeholder="CEP"
                  className="form-control form-control-lg"
                  onChange={(e) => setShippingValue('zipcode', e.target.value)}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-9">
                <input
                  type="text"
                  placeholder="Cidade"
                  className="form-control form-control-lg"
                  onChange={(e) => setShippingValue('city', e.target.value)}
                />
              </div>
              <div className="col-3 pl-0">
                <input
                  type="text"
                  placeholder="UF"
                  className="form-control form-control-lg"
                  onChange={(e) => setShippingValue('state', e.target.value)}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-9">
                <input
                  type="text"
                  placeholder="Logradouro"
                  className="form-control form-control-lg"
                  onChange={(e) => setShippingValue('street', e.target.value)}
                />
              </div>
              <div className="col-3 pl-0">
                <input
                  type="text"
                  placeholder="Número"
                  className="form-control form-control-lg"
                  onChange={(e) => setShippingValue('street_number', e.target.value)}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-3">
                <input
                  type="text"
                  placeholder="Bairro"
                  className="form-control form-control-lg"
                  onChange={(e) => setShippingValue('neighborhood', e.target.value)}
                />
              </div>
              <div className="col-9 pl-0">
                <input
                  type="text"
                  placeholder="Nome Completo"
                  className="form-control form-control-lg"
                  onChange={(e) => setTransaction({ ...transaction, shipping: { ...transaction.shipping, name: e.target.value, address: { ...transaction.shipping.address } } })}
                />
              </div>
            </div>
            <span className="section-title">Dados de Pagamento</span>
            <div className="row mb-3">
              <div className="col-6">
                <input
                  type="text"
                  placeholder="Número do Cartão"
                  className="form-control form-control-lg"
                  onChange={(e) => setTransaction({ ...transaction, card_number: e.target.value })}

                />
              </div>
              <div className="col-6 pl-0">
                <input
                  type="text"
                  placeholder="Nome do Titular"
                  className="form-control form-control-lg"
                  onChange={(e) => {
                    setTransaction({ ...transaction, card_holder_name: e.target.value })
                  }}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-6">
                <input
                  type="text"
                  placeholder="Validade"
                  className="form-control form-control-lg"
                  onChange={(e) => setTransaction({ ...transaction, card_expiration_date: e.target.value })}
                />
              </div>
              <div className="col-6 pl-0">
                <input
                  type="text"
                  placeholder="CVV"
                  className="form-control form-control-lg"
                  onChange={(e) => setTransaction({ ...transaction, card_cvv: e.target.value })}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12 d-flex justify-content-between align-items-center">
                <b>Total</b>
                <h3>R$ {total.toFixed(2)}</h3>
              </div>
              <div className="col-12">
                <button onClick={() => makePurchase()} className="btn btn-block btn-lg btn-primary">Finalizar Compra</button>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className='box col mb-4'>
              <h4>Minha Sacola ({cart.length})</h4>
              <div className='row products box-sidebar'>
                {cart.map((p) => <Product product={p} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;