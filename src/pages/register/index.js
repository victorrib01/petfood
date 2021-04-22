import Header from '../../components/header'
import Illustration from '../../assets/illustration.png'
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import {setCustomer as setStoreCostumer} from '../../store/modules/shop/actions'
import { Link } from 'react-router-dom';

const Register = () => {
  const dispatch = useDispatch();
  const [costumer, setCostumer] = useState({
    external_id: new Date().getTime().toString(),
    name: "",
    type: "individual",
    country: "br",
    email: "",
    documents: [
      {
        type: "cpf",
        number: ""
      }
    ],
    phone_numbers: [
      ""
    ],
    birthday: ""
  })

  const createCostumer = () => {
    dispatch(setStoreCostumer(costumer));
  }
  return (
    <div className="container-fluid h-100 bg-primary">
      <Header whiteVersion hideCart />
      <div className="row">
        <div className="col-6 my-auto">
          <img src={Illustration} className='img-fluid' alt='illustration' />
        </div>
        <div className="col-6">
          <div className="box col-9">
            <h3 className="text-center"
            >Falta pouco pra fazer o seu pet feliz.</h3>
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder='Nome Completo'
              onChange={(e) => {
                setCostumer({ ...costumer, name: e.target.value })
              }}
            />
            <input
              type="email"
              className="form-control form-control-lg mb-3"
              placeholder='E-mail'
              onChange={(e) => {
                setCostumer({ ...costumer, email: e.target.value })
              }}
            />
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder='Telefone'
              onChange={(e) => {
                setCostumer({ ...costumer, phone_numbers: [e.target.value] })
              }}
            />
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder='CPF'
              onChange={(e) => {
                setCostumer({
                  ...costumer, documents: [
                    {
                      type: "cpf",
                      number: e.target.value
                    }
                  ]
                })
              }}
            />
            <input
              type="date"
              className="form-control form-control-lg mb-3"
              placeholder='Data de Nascimento'
              onChange={(e) => {
                setCostumer({ ...costumer, birthday: e.target.value })
              }}
            />

            <Link to='/checkout' onClick={() => createCostumer()} className="btn btn-lg btn-block btn-secondary">
              Finalizar Pedido
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Register;