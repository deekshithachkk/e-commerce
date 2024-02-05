// ProductDetails.js

import React from 'react';
import { useParams, useRoutes} from 'react-router-dom';

const ProductDetails = ({ match, addToCart, addToWishlist }) => {
 
 const {id}=useParams();
  
  const productId = parseInt(id);

  const product = { id: productId, name: `Product ${productId}`, price: 25 };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <button onClick={() => addToWishlist(product)}>Add to Wishlist</button>
    </div>
  );
};

export default ProductDetails;
