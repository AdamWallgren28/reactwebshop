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
            <div  className='w-[70vw] flex justify-start flex-col items-center  bg-[white] bg-opacity-80 p-8 m-8 rounded-lg'>
                <h1>Checkout:</h1>
               
                {cartProducts.length === 0 ? 
                  <p><em>Your cart is empty.</em></p>
                  :                           
                  <div className='flex flex-col items-center'>
                    {cartProducts.map((product) => (
                      <CartItem key={product.id} product={product} quantity={cart[product.id]}/>
                    ))}
                    <div className='m-4 p-4 w-[50vw] bg-gray-300 rounded-lg'>
                      <h2 className='text-center font-bold my-4'>Order Summery</h2>
                      <div className='flex'>
                              <p className='w-[16vw]'>Product:</p>
                              <p className='w-[8vw]'>Qty:</p> 
                              <p className='w-[8vw]'>à:</p>
                              <p className='w-[8vw]'>tot:</p>
                            </div>
                      <hr className='border-gray-400'></hr>
                        <div>
                          {cartProducts.map((product) => (
                            <div key={product.id} className='flex'>
                              <p className='w-[16vw]'>- {product.title}</p>
                              <p className='w-[8vw]'>{cart[product.id]}</p> 
                              <p className='w-[8vw]'>$ {product.price}</p>
                              <p className='w-[8vw]'>$ {product.price*cart[product.id]}</p>
                            </div>
                          ))}
                        </div>
                      <hr className='border-gray-400'></hr>
                      <div className='flex justify-end'>
                        <div className='flex flex-col'>
                          <p class='totalCost' className='my-4'>
                            Total cost: $ {cartProducts.reduce(
                              (sum, product) => sum + product.price * cart[product.id], 0
                            )}
                          </p>
                          <button className="m-8 bg-gray-200 border border-black border-opacity-25 text-black font-bold py-2 px-4 mx-0 my-4 rounded  active:border-gray-500 hover:bg-red-600 hover:text-gray-200">
                              Empty shopping cart
                          </button>
                      
                        </div>
                      </div>
                    </div>
                  </div>
                }
                
                <Link to='/productlist'>
                    <button className=" bg-gray-200 hover:bg-gray-300 border border-black border-opacity-25 text-black font-bold py-2 px-4 rounded mx-0 my-4  active:border-gray-500">
                        Back to shopping!
                    </button>
                </Link>


                <div className="w-[50vw] p-6 bg-gray-300 shadow-md rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Checkout</h2>
                  <form>
                    <div className="mb-4">                    
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="Full name"
                      />
                    </div>
                    <div className="mb-4">                     
                      <input
                        type="text"
                        id="address"
                        name="address"
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="Adress"
                      />
                    </div>
                    <div className="flex mb-4">
                      <div className="w-1/2 mr-2">                      
                        <input
                          type="text"
                          id="zip"
                          name="zip"
                          className="w-full px-3 py-2 border rounded-md"
                          placeholder="Zip code"
                        />
                      </div>
                      <div className="w-1/2 ml-2">                        
                        <input
                          type="text"
                          id="city"
                          name="city"
                          className="w-full px-3 py-2 border rounded-md"
                          placeholder="City"
                        />
                      </div>
                    </div>
                    <hr className='border-gray-400'></hr>
                    <div className="my-4">                      
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="Phone number (+XX) XX-XXX XX XX"
                      />
                    </div>
                    <div className="mb-4">                     
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="email"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gray-200 hover:bg-gray-300 border border-black border-opacity-25 text-black font-bold py-2 px-4 rounded mx-0 my-4  active:border-gray-500"
                    >
                      Place Order
                    </button>
                  </form>
    </div>                         
            </div>
      </div>
    </>
  );
}

