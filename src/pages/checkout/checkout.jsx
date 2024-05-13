import React, { useState, useEffect, useContext } from 'react';
import {ShopContext} from '../../context/shopcontext';

export default function CheckOut() {
  let {cart, addToCart, removeFromCart, deleteFromCart} = useContext(ShopContext);
  return (
    <>   
      <div className="flex justify-center">
            <div  className='w-[80vw]'>
                <h1>Checkout</h1>
                <ul>
                {Object.keys(cart).map((itemId, index) => (
                    <div className="bg-gray-200 p-4 border-2 rounded m-7 ">
                        <li key={index}>                
                            <img src={cart[itemId].thumbnail} alt="product" className='w-[6vw] h-[4vw]'/>
                            <h2 className='font-bold'>{cart[itemId].title}</h2>    
                            <h3 className='text-green-500'>${cart[itemId].price}</h3>
                            <button onClick={() => removeFromCart(cart[itemId].id)} class="bg-gray-200 hover:bg-gray-300 border border-black border-opacity-25 text-black font-bold py-2 px-4 rounded">
                                -
                            </button>
                            <button onClick={() => addToCart(cart[itemId].id)} class="bg-gray-200 hover:bg-gray-300 border border-black border-opacity-25 text-black font-bold py-2 px-4 rounded">
                                +
                            </button>
                            <button onClick={() => deleteFromCart(cart[itemId].id)} class="bg-gray-200 hover:bg-gray-300 border border-black border-opacity-25 text-black font-bold py-2 px-4 rounded">
                                🗑️
                            </button>             
                        </li>
                    </div>
                ))}          
                </ul>
            </div>
      </div>
    </>
  );
}

