import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Header from '../../components/header'
import Product from '../../components/product/card'
import './styles.css'
import { requestPetshop } from '../../store/modules/shop/actions'

const Petshop = ({ match }) => {

  const dispatch = useDispatch();
  const { petshop } = useSelector(state => state.shop)
  
  useEffect(() => {
    dispatch(requestPetshop(match.params.id))
  }, [dispatch, match.params.id])

  return (
    <div className="h-100">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-2">
            <img
              src={petshop.logo}
              className="img-fluid petshop-image"
              alt={`${petshop.name}_logo`}
            />
            <b>{petshop.name}</b>
            <div className="petshop-infos">
              <span className="mdi mdi-star"></span>
              <text>
                <b>{petshop.rate}</b>
              </text>
              <span className="mdi mdi-cash-usd-outline"></span>
              <text>{petshop.category}</text>
              <span className="mdi mdi-crosshairs-gps"></span>
              <text>2,9km</text>
            </div>
            <label className="badge badge-primary">Frete Grátis</label>
          </div>
          <div className="col-10">
            <h5>Produtos</h5>
            <br />
            <div className="row">
              {petshop.products?.map((p) => <Product product={p} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Petshop;