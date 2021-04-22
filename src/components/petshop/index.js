import './styles.css';
import { setPetshopMapSelected, setMapCenter } from '../../store/modules/shop/actions'
import { useDispatch, useSelector } from 'react-redux';

const Petshop = ({ petshop }) => {
  const dispatch = useDispatch();
  const { petshopMapSelected } = useSelector(state => state.shop)

  const setSelectedPetshop = () => {
    dispatch(setPetshopMapSelected(petshop));
    dispatch(setMapCenter(petshop.location));
  }

  return (
    <li
      className={`petshop d-inline-block ${petshopMapSelected === petshop._id ? 'active' : ''}`}
      onClick={() => setSelectedPetshop()}
    >
      <div className="d-inline-block">
        <img src={petshop.logo}
          className="img-fluid" alt={`${petshop.name}_logo`} />
      </div>
      <div className="d-inline-block pl-3 align-bottom">
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
    </li>
  )
}

export default Petshop;