import React, { useContext } from "react";
import { ShopContext } from '../../context/shopcontext';


export default function OrderSummery({cart, cartProducts}){

    const { cartSum } = useContext(ShopContext);
    const deliveryCost = Number(cartSum(cartProducts)) < 500 ? 4.95 : 0 ;
    const grandTot = deliveryCost + Number(cartSum(cartProducts));
   



    return (
        <div className='m-4 px-4 py-2 w-[80vw] lg:w-[50vw] bg-gray-300 rounded-lg'>
            <h2 className='text-center font-bold my-2'>Order Summery</h2>
            <div className='flex justify-between'>
                    <p className='w-[40%]'>Product:</p>
                    <div className='hidden lg:flex lg:w-[60%]'>
                        <p className='w-[20%]'>Qty:</p> 
                        <p className='w-[40%]'>à:</p>
                        <p className='w-[40%]'>tot:</p>
                    </div>
            </div>
            <hr className='border-gray-400'></hr>
            <div className='text-xs'>
                {cartProducts.map((product) => (
                    <div key={product.id} className='lg:flex '>
                        <p className='lg:w-[40%] mt-2 lg:mb-2'>- {product.title}</p>
                        <br class='lg:hidden'></br>
                        <div className='flex justify-between lg:justify-start lg:w-[60%]'>
                            <p className='lg:w-[20%]'><span className='lg:hidden'>Qty:</span>{cart[product.id]}</p> 
                            <p className='lg:w-[40%]'><span className='lg:hidden'>à: </span>
                            {product.category === 'tablets' ? <span className='text-red-600'>$ {(product.price * 0.5).toFixed(2)}</span> : <span>$ {product.price}</span>}</p>
                            <p className='lg:w-[40%] mb-8 lg:mb-0'><span className='lg:hidden'>tot::</span>
                            {product.category === 'tablets' ? <span className='text-red-600'>$ {(product.price * cart[product.id] * 0.5).toFixed(2)}</span> : <span>$ {(product.price*cart[product.id]).toFixed(2)}</span>}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <hr className='border-gray-400'></hr>
            <div className='flex justify-end'>
                <div className='flex flex-col'>
                    
                    <p class='totalCost' className='text-xs mt-2'> Order cost: $ {cartSum(cartProducts)}</p>
                    <p  className='text-xs mb-2'>Delivery cost: $ {deliveryCost}</p>
                    <hr className=' border-gray-400'></hr>
                    <p  className='mt-2'>Grand total: $ {(grandTot).toFixed(2)} </p>
                </div>
            </div>
        </div>
    )
}