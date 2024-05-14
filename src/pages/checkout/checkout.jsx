import React, { useContext } from 'react';
import {ShopContext} from '../../context/shopcontext';
import CartItem from '../../components/cartitem/cartitem';

export default function CheckOut() {
const {cart, fetchData} = useContext(ShopContext);
const cartProducts = fetchData.filter((product) => cart[product.id] > 0 );

  return (
    <>   
      <div className="flex justify-center">
            <div  className='w-[80vw]'>
                <h1>Checkout</h1>                            
                    <div>
                      {cartProducts.map((product) => (
                        <CartItem key={product.id} product={product} quantity={cart[product.id]}/>
                      ))}
                    </div>                              
            </div>
      </div>
    </>
  );
}

