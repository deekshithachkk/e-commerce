// Wishlist.js

import React from "react";

import { FiDelete, FiEye, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import Title from "./Title";

const Wishlist = ({ wishlistItems, removeFromWishlist, addToCart }) => {
  return (
    <div className="product_card">
      <Title title={"WISH LIST"} />
      <div className="product_container">
        {wishlistItems.map((item) => (
          <div className="product-card" key={item.id}>
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <div className="icon_container">
              <FiShoppingCart
                size={30}
                className="icon"
                onClick={() => addToCart(item)}
              />
              <Link to={`/product/${item.id}`}>
                <FiEye className="icon" style={{ color: "blue" }} size={30} />{" "}
              </Link>
              <FiDelete
                className="icon"
                size={30}
                style={{ color: "red" }}
                onClick={() => removeFromWishlist(item.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
