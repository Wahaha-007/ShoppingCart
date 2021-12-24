import { Link } from "react-router-dom";
import { getInventories } from "../data";
import './productindex.css';


const Productindex = (props) => {

  let inventories = getInventories();

  return (
    <div className="container">
      {inventories.map(product =>
        <Card product={product} key={product.number} accessCart={props.accessCart} />)
      }
    </div>
  );
}

const Card = (props) => {

  const handleClickP = () => {
    props.accessCart(props.product, '+');
  };

  return (

    <div className="card">
      <Link to={`/products/${props.product.number}`} key={props.product.number}>
        <img className="smallimg" src={"./pic/" + props.product.number + ".jpg"} alt="Image place holder" />
      </Link>
      <p>{props.product.name}</p>
      <p>{props.product.price}$</p>
      <button onClick={handleClickP}>Add to cart</button>
    </div >

  );
};

export default Productindex; 