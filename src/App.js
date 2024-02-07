import React, { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Checkout from "./components/CheckOut";
import Header from "./components/Header";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import Wishlist from "./components/WishList";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import AuthContext, { UserContext } from "./context/AuthContext";


const App = () => {
  const {users,setUsers,loginType,setLoginType,isLogged}=useContext(UserContext);
 
  
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  

  const addToCart = (product) => {
    if(!cartItems.some((item)=>item.id==product.id))
    {
      setCartItems((prevItems) => [...prevItems, product]);
    }
    
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const addToWishlist = (product) => {
    setWishlistItems((prevItems) => [...prevItems, product]);
  };

  const removeFromWishlist = (productId) => {
    setWishlistItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

 
  
  const handleQuantity = (itemId,value) => {
   
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? { ...item, qty: value ,total: value * item.price }
          : item
      )
    );
  };

  return (
   
  <div>
    
    <Header count={cartItems.length}/>
      <Routes>
     
        
        <Route
          path="/"
          element={<Home addToCart={addToCart} addToWishlist={addToWishlist} />}
        />
       
        <Route
          path="/product/:id"
          element={
            <ProductDetails
              addToCart={addToCart}
              addToWishlist={addToWishlist}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              handleQuantity={handleQuantity}
             
            />
          }
        />
        <Route
          path="/wishlist"
          element={
            <Wishlist
              wishlistItems={wishlistItems}
              removeFromWishlist={removeFromWishlist}
              addToCart={addToCart}
            />
          }
        />
        <Route path="/checkout" element={<Checkout orderItems={cartItems}/>} />
        <Route path="/signIn" element={<SignIn/>} />
        <Route path="/signUp" element={<SignUp/>} />
      </Routes>
     
    </div>
   
  );
};

export default App;
