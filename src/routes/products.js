import { Link, Outlet } from "react-router-dom";
import { getInventories } from "../data";
import './products.css';


const Products = (props) => {

  let inventories = getInventories();

  return (
    <div className="container">
      {inventories.map(product => <Card product={product} key={product.number} accessCart={props.accessCart} />)}
    </div>
  );
}

const Card = (props) => {

  const handleClickP = () => {

    props.accessCart(props.product, '+');
  };


  const handleClickM = () => {

    props.accessCart(props.product, '-');
  };


  return (
    <div className="card">
      <p>{props.product.name}</p>
      <p><i>{props.product.price}$</i></p>

      <button onClick={handleClickP}>+</button>
      <button onClick={handleClickM}>-</button>
    </div>
  );
};

export default Products; 