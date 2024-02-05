// Checkout.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    // Perform login logic
    // If login is successful, set isAuthenticated to true
    setIsAuthenticated(true);
  };

  const handleCheckout = () => {
    // Perform checkout logic based on authentication status
    if (isAuthenticated) {
      // If user is authenticated, proceed with checkout
      console.log('Processing checkout for registered user');
      // Redirect to order confirmation or next step in the process
      navigate('/order-confirmation');
    } else {
      // If user is not authenticated, redirect to login page
      navigate('/login');
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      {isAuthenticated ? (
        <p>Logged in as a registered user</p>
      ) : (
        <p>Guest checkout - Login or continue as a guest</p>
      )}
      
      {!isAuthenticated && (
        <button onClick={handleLogin}>Login</button>
      )}

      <button onClick={handleCheckout}>Proceed to Checkout</button>
    </div>
  );
};

export default Checkout;
