
import React from 'react';

let Navbar = () => {
  return (
    <nav className="h-20 flex items-center justify-between bg-gray-200">
      <h1 className="ml-4 text-xl font-bold">My First Webshop</h1>
      <ul className="mr-4 flex">
        <li className="ml-4"><a href="#" className="text-blue-600">👤 Log in</a></li>
        <li className="ml-4"><a href="#" className="text-blue-600">🛒 Shopping cart</a></li>
        <li className="ml-4"><a href="#" className="text-blue-600">To Checkout</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;