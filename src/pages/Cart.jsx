import React, { useContext } from "react";
import CartContext from "../store/cart-context";
//import products from '../products'
import "./cart.css";
import "../index.css";

function Cart() {
  const cartCtx = useContext(CartContext);
  const removeFromCartHandler = (id) => {
    //console.log(id)
    cartCtx.removeItem(id);
  };
  
  const cartItems = cartCtx.items.map((item) => (
    <div className="cart-div">
      <ul className="cart-ul">
        <li className="cart-li">
          <img className="cart-img" src={item.image} alt="" />
        </li>
        <li className="cart-li">{item.name}</li>
        <li className="cart-li">${item.price.toFixed(2)}</li>
        <button className="btn">Add Item</button>
        <button className="btn" onClick={removeFromCartHandler}>
          Remove Item
        </button>
      </ul>
    </div>
  ));
  return <>{cartItems}</>;
}

export default Cart;

