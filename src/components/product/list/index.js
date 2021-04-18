import './styles.css';

const Product = () => {
  return (
    <div className="product-list col-12">
      <div className="row">
        <div className="col-3">
          <img src="https://www.petlove.com.br/images/products/210723/large/Ra%C3%A7%C3%A3o_Premier_Golden_Special_C%C3%A3es_Adultos_Frango_e_Carne_-_15_Kg_1213490_2.jpg?1562151327"
            className="img-fluid"
            alt='product_image'
          />
        </div>
        <div className="col-6">
          <h6>
            <label className="badge badge-primary">R$ 30,00</label>
          </h6>
          <small>
            <b>Nome do Produto</b>
          </small>
        </div>
        <div className="col-3">
          <button className="btn btn-secondary rounded-circle">-</button>
        </div>
      </div>
    </div>
  )
}

export default Product;