import './styles.css';

const Product = () => {
  return (
    <div className="product col-3">
      <img src="https://www.petlove.com.br/images/products/210723/large/Ra%C3%A7%C3%A3o_Premier_Golden_Special_C%C3%A3es_Adultos_Frango_e_Carne_-_15_Kg_1213490_2.jpg?1562151327" className="img-fluid align-center" alt='' />
      <button className="btn btn-primary rounded-circle">+</button>
      <h4>
        <label className="badge badge-primary">R$ 90,00</label>
      </h4>
      <small>
        <b>Ração Magnus Todo Dia sabor Carne para Cães Adultos - 15 Kg</b>
      </small>
    </div>
  );
}

export default Product;