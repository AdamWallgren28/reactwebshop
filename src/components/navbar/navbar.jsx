import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../../context/shopcontext';
import { Link } from 'react-router-dom';
import ToggleCart from '../togglecart/togglecart';
import { useLocation } from 'react-router-dom';

export default function Navbar () {
  const {showing, setShowing, grandTot } = useContext(ShopContext);
  const { pathname } = useLocation();
  
  // Scrollar till toppen vid sidbyte.
  // (Har lagt denna i en "global" komponent, istället för context, då "useLocation" måste vara wrappat i <Router>.)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <nav className='h-40 bg-gray-200 sticky top-0 z-50 shadow-lg text-gray-800'>
        <div className='flex p-4'>
          <div className='w-[90%] lg:w-[80%] h-10 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 flex m-auto'>
            <p className='text-gray-800 m-auto'>Always free shipping over $500!!</p>
          </div>
        </div>

        <div className='h-20 flex items-center justify-between'>
          <h1 className='ml-4 text-xl lg:text-2xl font-bold w-[20%]'><Link to='/'>My First Webshop</Link></h1>
          <ul className='mr-4 flex'>        
            <button onClick={() => setShowing(!showing)} className='max-w-[100vw] ml-4 bg-gray-200 hover:bg-gray-100 border border-gray-600 border-opacity-25 text-black py-2 px-2 lg:px-4 rounded active:border-gray-500'>            
              {showing ? <p>X Close cart</p> : <p><span className='font-bold'>🛒</span>: $ {grandTot}</p>}
            </button>

          </ul>
        </div>
      </nav>
    {showing && (<ToggleCart />)}
    </>
  );
};
