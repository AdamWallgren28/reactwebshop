
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar () {
  return (
    <nav className="h-20 flex items-center justify-between bg-gray-200">
      <h1 className="ml-4 text-xl font-bold"><Link to='/'>My First Webshop</Link></h1>
      <ul className="mr-4 flex">
        <li className="ml-4"><a href="#">👤 Log in</a></li>
        <li className="ml-4"><a href="#">🛒 Shopping cart</a></li>
        <li className="ml-4"><Link to='/checkout'>To Checkout</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;