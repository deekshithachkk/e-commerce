// Checkout.js

import React, { useState } from 'react';
import DeliveryOption from './DeliveryOptions';

const Checkout = () => {
  const [selectedDelivery, setSelectedDelivery] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 20 },
    // Add more initial cart items as needed
  ]);

  const handleSelectDelivery = (option) => {
    setSelectedDelivery(option);
  };

  const handleAuthentication = () => {
    // Assume a successful authentication for simplicity
    setIsAuthenticated(true);
  };
  const handleLogin = () => {
    // Perform login logic
    // If login is successful, set isAuthenticated to true
    setIsAuthenticated(true);
  };

  const handleCheckout = () => {
    if (!selectedDelivery) {
      console.error('Please select a delivery option.');
      return;
    }

    if (!isAuthenticated) {
      console.error('Please authenticate before proceeding to checkout.');
      // Redirect to login or show a modal for authentication
      return;
    }

    if (cartItems.length === 0) {
      console.error('Your cart is empty. Add items before checking out.');
      return;
    }

    // Calculate total amount based on cart items
    const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);

    // Perform checkout logic, e.g., interact with a backend API
    console.log('Processing checkout...');
    console.log('Selected Delivery Option:', selectedDelivery);
    console.log('User Authenticated:', isAuthenticated);
    console.log('Cart Items:', cartItems);
    console.log('Total Amount:', totalAmount);

    // Redirect to order confirmation or next step in the process
  };

  return (
    <div>
      <h2>Checkout</h2>
      <DeliveryOption onSelectDelivery={handleSelectDelivery} />
      <div>
        <h3>Shopping Cart</h3>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>{item.name} - ${item.price}</li>
          ))}
        </ul>
      </div>
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
