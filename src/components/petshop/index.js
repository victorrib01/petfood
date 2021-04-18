import './styles.css';

const Petshop = () => {
  return (
    <li className="petshop d-inline-block">
      <div className="d-inline-block">
        <img src="https://media-exp1.licdn.com/dms/image/C560BAQGFB5bXwnGsiQ/company-logo_200_200/0/1606828505187?e=2159024400&v=beta&t=Tak_Qe9Q2Em601A7GxzEGfd9938TpUzaLqt4SZw8ByE" 
        className="img-fluid" alt='petshop_logo' />
      </div>
      <div className="d-inline-block pl-3 align-bottom">
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
    </li>
  )
}

export default Petshop;