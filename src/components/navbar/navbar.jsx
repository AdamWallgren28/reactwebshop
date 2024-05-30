import React, { useContext } from 'react';
import { ShopContext } from '../../context/shopcontext';
import { Link } from 'react-router-dom';


export default function Navbar () {
  const {cartProducts, cartSum } = useContext(ShopContext);
 
  return (
    <nav className="h-20 flex items-center justify-between bg-gray-200 sticky top-0 z-5 shadow-lg text-gray-800">
      <h1 className="ml-4 text-xl font-bold w-[20%]"><Link to='/'>My First Webshop</Link></h1>
      <ul className="mr-4 flex">        
        <li className=" max-w-[100vw] ml-4 bg-gray-200 hover:bg-gray-100 border border-gray-600 border-opacity-25 text-black py-2 px-2 lg:px-4 rounded active:border-gray-500"><p><span className='font-bold'>🛒</span>
          : $ {cartSum(cartProducts)}</p>
        </li>
        <li className="ml-4 bg-gray-200 hover:bg-gray-100 border border-gray-600 border-opacity-25 text-black py-2 px-4 rounded active:border-gray-500"><Link to='/checkout'>To Checkout</Link></li>
      </ul>
    </nav>
  );
};
