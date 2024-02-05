// Home.js

import React from 'react';
import ProductCard from './ProductCard';

const Home = ({ addToCart, addToWishlist }) => {
  // Assume products is an array of product objects
  const products = [
    { id: 1, name: 'Product 1', price: 20 },
    { id: 2, name: 'Product 2', price: 30 },
    // Add more products as needed
  ];

  return (
    <div>
      <h2>Home</h2>
      <div>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
            addToWishlist={addToWishlist}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
