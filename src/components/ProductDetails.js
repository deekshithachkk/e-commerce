// ProductDetails.js

import React from "react";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { useParams } from "react-router-dom";

const ProductDetails = ({ addToCart, addToWishlist }) => {
  const { id } = useParams();

  const productId = parseInt(id);

  const product = { id: productId, name: `Product ${productId}`, price: 25 };

  return (
    <div className="product-detail-container">
      <div>
        <h2 className="align-center">{product.name}</h2>
        <p className="align-center">Price: ${product.price}</p>
        <div className="icon_container">
        <FiShoppingCart
          size={30}
          className="icon"
          onClick={() => addToCart(product)}
        />
        <FiHeart
          className="icon"
          size={30}
          onClick={() => addToWishlist(product)}
        >
          Add to Wishlist
        </FiHeart>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
