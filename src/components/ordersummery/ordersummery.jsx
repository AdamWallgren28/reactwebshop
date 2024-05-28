import React from "react";

export default function OrderSummery({cart, cartProducts}){


    return (
        <div className='m-4 px-4 py-2 w-[80vw] lg:w-[50vw] bg-gray-300 rounded-lg'>
            <h2 className='text-center font-bold my-2'>Order Summery</h2>
            <div className='flex justify-between'>
                    <p className='w-[24vw]'>Product:</p>
                    <p className='w-[6vw]'>Qty:</p> 
                    <p className='w-[14vw]'>à:</p>
                    <p className='w-[14vw]'>tot:</p>
            </div>
            <hr className='border-gray-400'></hr>
            <div className='text-xs'>
                {cartProducts.map((product) => (
                    <div key={product.id} className='flex justify-between'>
                        <p className='w-[24vw] mb-2'>- {product.title}</p>
                        <p className='w-[6vw]'>{cart[product.id]}</p> 
                        <p className='w-[14vw]'>$ {product.price}</p>
                        <p className='w-[14vw]'>$ {(product.price*cart[product.id]).toFixed(2)}</p>
                    </div>
                ))}
            </div>
            <hr className='border-gray-400'></hr>
            <div className='flex justify-end'>
                <div className='flex flex-col'>
                    <p class='totalCost' className='my-2'>
                        Total cost: $ {cartProducts.reduce(
                            (sum, product) => sum + product.price * cart[product.id], 0
                        ).toFixed(2)}
                    </p> 
                </div>
            </div>
        </div>
    )
}