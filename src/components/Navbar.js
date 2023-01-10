import React from 'react'
import './Navbar.css';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const CartCount=useSelector((state)=>state.CartReducer.cartValues.length);
    const totalPrice=useSelector((state)=>state.CartReducer.totalPrice);
  return (
    <div className='bg-dark text-white text-center header'>
        <span><strong>Shoping App</strong></span>
        <span className="btn btn-primary">Cart Items:{CartCount}</span>
        <span className="btn btn-warning">Total Price:{totalPrice}</span>
    </div>
  )
}

export default Navbar
