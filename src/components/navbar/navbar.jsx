import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../context/shopcontext';
import { Link } from 'react-router-dom';

export default function Navbar () {

  const { cart, fetchData } = useContext(ShopContext);

  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    setCartProducts(fetchData.filter(product => cart[product.id] > 0));
  }, [cart, fetchData]);



  return (
    <nav className="h-20 flex items-center justify-between bg-gray-200 sticky top-0 z-5 shadow-md">
      <h1 className="ml-4 text-xl font-bold"><Link to='/'>My First Webshop</Link></h1>
      <ul className="mr-4 flex">        
        <li className="ml-4"><p>🛒 Shopping cart<span>
          : $ {cartProducts.reduce(
            (sum, product) => sum + product.price * cart[product.id],
            0
          ).toFixed(2)}</span></p>
        </li>
        <li className="ml-4"><Link to='/checkout'>To Checkout</Link></li>
      </ul>
    </nav>
  );
};
