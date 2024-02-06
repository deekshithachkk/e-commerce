import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Checkout from "./components/CheckOut";
import Header from "./components/Header";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import Wishlist from "./components/WishList";


const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
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


  const handleDecrementQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.qty > 1
          ? { ...item, qty: item.qty - 1, total: (item.qty - 1) * item.price }
          : item
      )
    );
  };
  const handleIncrementQuantity = (itemId) => {
    console.log(itemId);
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? { ...item, qty: item.qty + 1, total: ++item.qty * item.price }
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
              handleDecrementQuantity={handleDecrementQuantity}
              handleIncrementQuantity={handleIncrementQuantity}
            />
          }
        />
        <Route
          path="/wishlist"
          element={
            <Wishlist
              wishlistItems={wishlistItems}
              removeFromWishlist={removeFromWishlist}
            />
          }
        />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
     
    </div>
   
  );
};

export default App;
