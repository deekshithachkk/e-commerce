// Checkout.js

import React, { useState,useContext } from "react";
import BillingForm from "./BillingForm";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/AuthContext";
import { alertPopUp, billingFormError, orderSuccess } from "../helper";
import Title from './Title';


const Checkout = ({ orderItems }) => {
  const {userData}=useContext(UserContext);
  const navigate=useNavigate()
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const total = orderItems.reduce((acu, current) => acu + current.total, 0);

  const handleAuthentication = () => {
    // Assume a successful authentication for simplicity
    setIsAuthenticated(true);
  };
  const handleLogin = () => {
    // setIsAuthenticated(true);

    if(Object.keys(userData?.billingData).length>0)
    {
      navigate('/signIn')
    }
    else
    {
      alertPopUp(billingFormError)
    }

  };

  const handleCheckout = () => {
    if(Object.keys(userData?.billingData).length>0)
    {
      alertPopUp(orderSuccess)
    }
    else
    {
      alertPopUp(billingFormError)
    }
   
  };

  return (
    <div>
       <Title title={'CHECK OUT'}/>

      <div>
        <h3>Shopping Cart</h3>  
        <BillingForm />
        <h1>Total Price {parseFloat(total)}</h1>
      </div>
      <h2>Place the order</h2>
      {isAuthenticated ? (
        <p>Logged in as a registered user</p>
      ) : (
        <p>Guest checkout - Login or continue as a guest</p>
      )}

      {!isAuthenticated && <button className="product-card" onClick={handleLogin}>Login</button>}

      <button className="product-card" onClick={handleCheckout}>Login As Guest</button>
    </div>
  );
};

export default Checkout;
