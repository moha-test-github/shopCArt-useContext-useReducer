//import { BrowserRouter ,Routes,Route} from "react-router-dom";

import Nav from './navbar/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';
import CartProvider from './store/CartProvider';


function App() {
  return (
    <CartProvider>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route exact path="/products" element={<Products/>}/>
      <Route path="/products/:productId" element={<ProductDetail/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
   
   


    </CartProvider>
  );
}

export default App;
