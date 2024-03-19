// import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import './App.css'
import Product from './components/product/Product';
import Cart from './components/cart/Cart';
import { useState } from 'react';

function App() {
  const [showCart, setShowCart] = useState(false);
  const [counter, setCounter] = useState(0);
  return (
    <div className='app'>
      <Cart showCart = {showCart}
        setShowCartFalse = {() => {setShowCart(false)}}
        counter = {counter}
      />
      <Navbar 
        setShowCartTrue = {() => {setShowCart(true)}}
        counter = {counter}
      />
      <Product
        counter = {counter}
        setCounter = {setCounter}
        setShowCartTrue = {() => {setShowCart(true)}}
      />
    </div>
  )
}

export default App;
