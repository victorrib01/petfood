import { BrowserRouter as Router, Route } from 'react-router-dom';

import './styles/global.css'
import Sidebar from './components/sidebar'
import Register from './pages/register'
import Checkout from './pages/checkout'
import Petshop from './pages/petshop'
import Home from './pages/home'

const Routes = () => {
  return (
    <>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/petshop/:id" exact component={Petshop} />
        <Route path="/checkout" exact component={Checkout} />
        <Route path="/register" exact component={Register} />
        <Sidebar />
      </Router>
    </>
  )
}

export default Routes;
