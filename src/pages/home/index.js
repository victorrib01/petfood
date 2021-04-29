import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestPetshops } from '../../store/modules/shop/actions'

import './styles.css'
import Header from '../../components/header'
import Petshop from '../../components/petshop'
import Map from '../../components/map'
import Modal from '../../components/modal';

const Home = () => {
  const dispatch = useDispatch();
  const { petshops } = useSelector((state) => state.shop)

  const [show, setShow] = useState(true);

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
          {petshops.map((p) => <Petshop petshop={p} />)}
        </ul>
      </div>
      <Map petshops={petshops} />
      <Modal 
        show={show}
        onClose={() => setShow(false)}
        title='Ajuda'
        body='Clique em um petshop através do mapa para abri-lo.'
        />
    </div>
  )
}

export default Home;