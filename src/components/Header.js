import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({count}) => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart<span className='badge'>{count}</span></Link>
        <Link to="/wishlist">Wishlist</Link>  
      </nav>
    </header>
  );
};

export default Header;
