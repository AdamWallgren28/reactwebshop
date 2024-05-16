import React from "react";

export default function OrderSummery({cart, cartProducts}){


    return (
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
    )
}