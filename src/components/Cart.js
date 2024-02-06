// Cart.js

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Cart = ({ cartItems, removeFromCart ,handleDecrementQuantity,handleIncrementQuantity}) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  
  return (
    <div className='product-card'>
      <h2>Cart</h2>
      
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {/* <button className='dec' onClick={() => handleDecrementQuantity(item.id)}>-</button> */}
            {item.name} -{item.qty} -${item.price}
            <h5>Total:{item.total}</h5>
            {/* <button className='inc' onClick={() => handleIncrementQuantity(item.id)}>+</button> */}
            <button style={{backgroundColor:"red"}} onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={handleCheckout}>Next</button>
    </div>
  );
};

export default Cart;
