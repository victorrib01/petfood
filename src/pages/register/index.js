import Header from '../../components/header'
import Illustration from '../../assets/illustration.png'

const Register = () => {
  return (
    <div className="container-fluid h-100 bg-primary">
      <Header whiteVersion hideCart/>
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
            />
            <input
              type="email"
              className="form-control form-control-lg mb-3"
              placeholder='E-mail'
            />
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder='Telefone'
            />
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder='CPF'
            />
            <input
              type="date"
              className="form-control form-control-lg mb-3"
              placeholder='Data de Nascimento'
            />

            <button className="btn btn-lg btn-block btn-secondary">
              Finalizar Pedido
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Register;