import { Outlet, Link } from "react-router-dom";
import "./App.css";

const App = (props) => {
  return (
    <div>
      <div className="header">
        <h1 >Virtual Shopping Shop Version 1.0</h1>
        <nav className="navig">
          <div>
            <Link to="/home">Home</Link> |{" "}
            <Link to="/products">Products</Link> |{" "}
            <Link to="/contact">Contact</Link>
          </div>
          <div>
            <Link to="/cart">Cart({props.num})</Link>
          </div>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}

export default App;