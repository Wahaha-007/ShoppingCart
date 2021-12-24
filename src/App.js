import { Outlet, Link } from "react-router-dom";
import "./App.css";

const App = (props) => {
  return (
    <div>
      <h1 >Virtual Shopping Shop Version 1.0</h1>
      <nav className="header">
        <div>
          <Link to="/home">Home</Link> |{" "}
          <Link to="/products">Products</Link> |{" "}
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <Link to="/cart">Cart({props.num})</Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;