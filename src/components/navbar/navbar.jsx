import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../context/shopcontext';
import { Link } from 'react-router-dom';
// import ToggleCart from '../togglecart/togglecart';


export default function Navbar () {

  const { cart, fetchData } = useContext(ShopContext);
  const [cartProducts, setCartProducts] = useState([]);
  // const [isCartVisible, setIsCartVisible] = useState(false);

  // const toggleCartVisibility = () => {
  //   setIsCartVisible(prevState => !prevState);
  // };

  useEffect(() => {
    setCartProducts(fetchData.filter(product => cart[product.id] > 0));
  }, [cart, fetchData]);



  return (
    <nav className="h-20 flex items-center justify-between bg-gray-200 sticky top-0 z-5 shadow-lg text-gray-800">
      <h1 className="ml-4 text-xl font-bold "><Link to='/'>My First Webshop</Link></h1>
      <ul className="mr-4 flex">        
        <li className=" ml-4 bg-gray-200 hover:bg-gray-100 border border-gray-600 border-opacity-25 text-black py-2 px-2 lg:px-4 rounded active:border-gray-500"><p><span className='font-bold'>🛒</span><span>
          : $ {cartProducts.reduce(
            (sum, product) => sum + product.price * cart[product.id],
            0
          ).toFixed(2)}</span></p>
        </li>
        <li className="ml-4 bg-gray-200 hover:bg-gray-100 border border-gray-600 border-opacity-25 text-black py-2 px-4 rounded active:border-gray-500"><Link to='/checkout'>To Checkout</Link></li>
      </ul>
    </nav>
  );
};
