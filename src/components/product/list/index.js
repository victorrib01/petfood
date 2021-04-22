import './styles.css';
import { toggleCartProduct } from '../../../store/modules/shop/actions'
import { useDispatch } from 'react-redux';


const Product = ({ product }) => {
  const dispatch = useDispatch();

  const toggleProduct = (product, toggleCartProduct, dispatch) => {
    dispatch(toggleCartProduct(product))
  }

  return (
    <div className="product-list col-12">
      <div className="row">
        <div className="col-3">
          <img src={`${product.cape}`}
            className="img-fluid"
            alt='product_image'
          />
        </div>
        <div className="col-6">
          <h6>
            <label className="badge badge-primary">R$ {product.price.toFixed(2)}</label>
          </h6>
          <small>
            <b>{product.name}</b>
          </small>
        </div>
        <div className="col-3">
          <button onClick={() => toggleProduct(product, toggleCartProduct, dispatch)} className="btn btn-secondary rounded-circle">-</button>
        </div>
      </div>
    </div>
  )
}

export default Product;