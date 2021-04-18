import Header from '../../components/header'
import Product from '../../components/product/card'
import './styles.css'

const Petshop = () => {
  return (
    <div className="h-100">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-2">
            <img src="https://media-exp1.licdn.com/dms/image/C560BAQGFB5bXwnGsiQ/company-logo_200_200/0/1606828505187?e=2159024400&v=beta&t=Tak_Qe9Q2Em601A7GxzEGfd9938TpUzaLqt4SZw8ByE" className="img-fluid petshop-image" alt='petshop_logo'/>
            <b>Petlove</b>
            <div className="petshop-infos">
              <span className="mdi mdi-star"></span>
              <text>
                <b>2,8</b>
              </text>
              <span className="mdi mdi-cash-usd-outline"></span>
              <text>$$$</text>
              <span className="mdi mdi-crosshairs-gps"></span>
              <text>2,9km</text>
            </div>
            <label className="badge badge-primary">Frete Grátis</label>
          </div>
          <div className="col-10">
            <h5>Produtos</h5>
            <br />
            <div className="row">
              {[1,2,3,4,5,6,7,8,9].map((p) => <Product />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Petshop;