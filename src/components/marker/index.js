import './styles.css';

import MarkerIcon from '../../assets/marker.png';
import MarkerIconSelected from '../../assets/marker-selected.png';

const Marker = () => {

  return (
    <div>
      <img alt='marker' src={MarkerIconSelected} />
      <img src="https://media-exp1.licdn.com/dms/image/C560BAQGFB5bXwnGsiQ/company-logo_200_200/0/1606828505187?e=2159024400&v=beta&t=Tak_Qe9Q2Em601A7GxzEGfd9938TpUzaLqt4SZw8ByE" 
        className="img-marker" alt='petshop_logo' />
    </div>
  )

}

export default Marker;