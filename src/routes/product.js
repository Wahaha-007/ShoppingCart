import { useParams,useNavigate } from "react-router-dom";
import { getInventories } from "../data";
import "./product.css";

const Product = (props) => {

    const inventories = getInventories();
    const params = useParams();
    let navigate = useNavigate();

    const pos = inventories.findIndex(x => x.number == params.productId);
    const cProduct = inventories[pos];


    const handleClickP = () => {
        props.accessCart(cProduct, '+');
    };

    return (

        <div className="pcontainer">
            <img className="bigimg" src={"./pic/"+cProduct.number+".jpg"} alt="Image place holder" />

            <div className="ptext">
                <h2>{cProduct.name}</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt beatae corrupti neque voluptate optio! Possimus sunt illo aperiam id repellendus amet excepturi, odio explicabo consequatur labore, magnam dolorum, quos ab?</p>
                <p>Price : <i>{cProduct.price}</i> $</p>

                <div className="pfooter">
                    <button onClick={handleClickP}>Add to cart</button>
                    <button onClick={() => { navigate("/products"); }}>Back</button>
                </div>
            </div>

        </div>
    );

}

export default Product;