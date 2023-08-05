
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import CartContext from '../store/cart-context'

function Nav() {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.length
  // cartCtx.items.reduce((curNumber, item) => { 
  //   return curNumber + item.items;
  // }, 0);
  return (
    <header className="header">
        <nav className="nav">
            <NavLink className="logo"> <span>Moo</span>CarT</NavLink>
            <ul className="menu">
                <li><NavLink to='/products'>Home</NavLink></li>
                <li><NavLink to="cart">Shop ({numberOfCartItems})</NavLink></li>
            </ul>    
        </nav>
    </header>
  )
}

export default Nav