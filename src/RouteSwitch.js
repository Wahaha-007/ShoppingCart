import { HashRouter, Routes, Route } from "react-router-dom";
import { useReducer, useState } from "react";
import App from "./App";

import Home from "./routes/home";
import Productindex from "./routes/productindex";
import Products from "./routes/products";
import Product from "./routes/product";
import Contact from "./routes/contact";
import Cart from "./routes/cart";


const RouteSwitch = () => {

  const [cart, setCart] = useState([]);

  const getSumQty = (arr) => arr.map(i => i.qty).reduce((a, b) => a + b, 0);
  const getSumPrice = (arr) => arr.map(i => i.qty * i.price).reduce((a, b) => a + b, 0);
  const accessCart = (obj, dir) => {

    let position = cart.findIndex(x => x.number === obj.number);
    let tempArr = [...cart];

    if (position == -1) { // Not found, new item !

      if (dir == '+') {

        const myObj = {
          name: obj.name,
          number: obj.number,
          price: obj.price,
          qty: 1
        };

        tempArr.push(myObj);
      } else {

        // Do nothing
      }

    } else { // Already in cart

      if (dir == '+') { // Put to cart

        tempArr[position].qty++;

      } else {  // Pick from cart

        if (tempArr[position].qty > 0) {

          tempArr[position].qty--;

        } else {

          tempArr.splice(position, 1);

        }
      }
    }

    setCart(tempArr);
    //console.log(tempArr);
    //console.log(getSumQty(tempArr));
    //console.log(getSumPrice(tempArr));
  };

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App num={getSumQty(cart)} />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} >
            <Route index element={<Productindex accessCart={accessCart} />} />
            <Route path=":productId" element={<Product accessCart={accessCart} />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart cart={cart} getSumPrice={getSumPrice} accessCart={accessCart} />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default RouteSwitch;