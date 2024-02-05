// ProductList.js
import React from 'react';

const ProductList = ({ products, addToCart, addToWishlist }) => {
  return (
    <div>
      <h2>Products</h2>
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
          <button onClick={() => addToWishlist(product)}>Add to Wishlist</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
