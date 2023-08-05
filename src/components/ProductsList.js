import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from '../store/cart-context'

function ProductsList(props) {
    const cartCtx=useContext(CartContext);
    const price = `$${props.product.price.toFixed(2)}`;
    const addToCartHandler=(amount)=>{
        cartCtx.addItem({
            id: props.product.id,
            name : props.product.name,
            price : props.product.price,
            amount:amount,
            image : props.product.image,
        }) 
    }
  return (
    <div className="product" key={props.id}>
      <Link to={`/products/${props.product.id}`}>
        <img src={props.product.image} alt="Product 1" />
        <h3>{props.product.name}</h3>
        <p>{price}</p>
      </Link>
      <button
        className="add-to-cart"
        onClick={addToCartHandler}> Add to Cart</button>
    </div>
  );
}

export default ProductsList;

// <div className='product-list'>
//         {products.map((prod)=>(
//             <div className="product" key={prod.id}>
//           <Link to={`/products/${prod.id}`}>
//            <img src={prod.image} alt="Product 1" />
//            <h3>{prod.name}</h3>
//            <p>{prod.price}</p>
//             </Link>
//            <button className="add-to-cart"
//           // onClick={addToCartHandler}
//            >Add to Cart</button>
//          </div>
//         ))}
//     </div>
