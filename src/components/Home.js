// Home.js

import React from 'react';
import ProductCard from './ProductCard';

const Home = ({ addToCart, addToWishlist }) => {
  // Assume products is an array of product objects
  const products = [
    { id: 1, name: 'Product A', price: 20 ,qty:1,total:20},
    { id: 2, name: 'Product B', price: 30,qty:1 ,total:20},
    { id: 2, name: 'Product C', price: 40,qty:1 ,total:20},
    { id: 2, name: 'Product D', price: 50,qty:1 ,total:20},
    { id: 2, name: 'Product E', price: 60,qty:1 ,total:20},
    { id: 2, name: 'Product F', price: 70,qty:1 ,total:20},
    { id: 2, name: 'Product G', price: 80,qty:1 ,total:20},
 
  ];

  return (
    <div>
      <h2 style={{textAlign:'center'}}>Home</h2>
      <div className='product_container'>
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
