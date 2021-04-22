import Logo from '../../assets/logo.png'
import LogoWhite from '../../assets/logo-white.png'

import { Link } from 'react-router-dom';
import './styles.css';
import { useSelector } from 'react-redux';

const Header = ({ whiteVersion, hideCart }) => {
  const {cart} = useSelector(state => state.shop)
  const openDrawer = () => {
    const event = new CustomEvent('openCart');
    window.dispatchEvent(event);
  }

  return (
    <div className="col-12">
      <header className="py-4 px-4 text-center">
        <Link to='/'>
          <img src={whiteVersion ? LogoWhite : Logo} alt='logo' className='img-fluid' />
        </Link>
      </header>
      {!hideCart && (
        <button onClick={() => openDrawer()} className='btn btn-secondary cart-button'>
          <span className='mdi mdi-cart'></span>
        {cart.length} {cart.length === 1 ? 'Item':'Ítens'}
        </button>
      )}
    </div>
  );
}

export default Header;