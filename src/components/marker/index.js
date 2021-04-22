import './styles.css';

import MarkerIcon from '../../assets/marker.png';
import MarkerIconSelected from '../../assets/marker-selected.png';
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux';

const Marker = ({ petshop }) => {

  const { petshopMapSelected } = useSelector(state => state.shop)

  return (
    <Link to={`/petshop/${petshop._id}`}>
      <img alt='marker' src={petshopMapSelected === petshop ? MarkerIconSelected : MarkerIcon} />
      <img src={petshop.logo}
        className="img-marker" alt='petshop_logo' />
    </Link>
  )

}

export default Marker;