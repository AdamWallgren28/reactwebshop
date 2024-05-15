import React, { useContext } from 'react';
import {ShopContext} from '../../context/shopcontext';
import CartItem from '../../components/cartitem/cartitem';
import { Link } from 'react-router-dom';

export default function CheckOut() {
const {cart, fetchData} = useContext(ShopContext);
const cartProducts = fetchData.filter((product) => cart[product.id] > 0 );

  return (
    <>   
      <div className="flex justify-center min-h-screen bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}>
            <div  className='w-[80vw] flex justify-start flex-col items-center  bg-[white] bg-opacity-80 p-8'>
                <h1>Checkout:</h1>
               
                {cartProducts.length === 0 ? 
                  <p><em>Your cart is empty</em></p>
                  :                           
                  <div clasName="productCardCheckoutDisplay">
                    {cartProducts.map((product) => (
                      <CartItem key={product.id} product={product} quantity={cart[product.id]}/>
                    ))}
                  </div>
                }
                
                <Link to='/productlist'>
                    <button className="m-8 bg-gray-200 hover:bg-gray-300 border border-black border-opacity-25 text-black font-bold py-2 px-4 rounded">
                        Back to shopping!
                    </button>
                </Link>                          
            </div>
      </div>
    </>
  );
}

