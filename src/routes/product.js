import { useParams } from "react-router-dom";

const Product = () => {
    let params = useParams();
    return <h2>Invoice: {params.productId}</h2>;
}

export default Product;