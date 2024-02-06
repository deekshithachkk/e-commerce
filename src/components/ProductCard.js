import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiHeart, FiEye } from "react-icons/fi";

const ProductCard = ({ product, addToCart, addToWishlist }) => {
  const {name,price,id}=product
  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <div className="icon_container">
        <FiShoppingCart
          size={30}
          className="icon"
          onClick={() => addToCart(product)}
        />
        <FiHeart
          size={30}
          className="icon"
          style={{ color: "red" }}
          onClick={() => addToWishlist(product)}
        />

        <FiEye className="icon" style={{ color: "blue" }} size={30}>
          <Link to={`/product/${id}`}> </Link>
        </FiEye>
      </div>
    </div>
  );
};

export default ProductCard;
