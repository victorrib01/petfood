import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestPetshops } from '../../store/modules/shop/actions'

import './styles.css'
import Header from '../../components/header'
import Petshop from '../../components/petshop'
import Map from '../../components/map'

const Home = () => {
  const dispatch = useDispatch();
  const { petshops } = useSelector((state) => state.shop)

  useEffect(() => {
    dispatch(requestPetshops());
  }, [dispatch])
  return (
    <div className="h-100">
      <Header />
      <div className="container-fluid petshop-list-container">
        <div className="col-12 px-4 text-center">
          <h5>Mais próximos de você ({petshops.length})</h5>
        </div>
        <ul className="col-12 petshop-list">
          {petshops.map((p) => <Petshop petshop={p}/>)}
        </ul>
      </div>
      <Map petshops={petshops} />
    </div>
  )
}

export default Home;