import { React, useContext } from "react";
import { ShopContext } from "../../context/shopcontext";

export default function CartItem({product, quantity}) {

const {cart, addToCart, removeFromCart, deleteFromCart} = useContext(ShopContext);

return(
        <>
            <div className="m-4 p-4 bg-gray-300 rounded-lg flex">                
                <img src={product.thumbnail} alt="product" className='w-[18vw] h-[14vw]'/>
                <div className="mx-4">
                    <h2 className='font-bold'>{product.title}</h2>
                    <h5 className='hidden'>{product.description}</h5>
                    <h3 className='text-green-500'>${product.price}</h3>
                    <h2>qty: {quantity}</h2>
                    <button onClick={() => removeFromCart(product.id)} className="bg-gray-200 hover:bg-gray-100 border border-black border-opacity-25 text-black font-bold py-2 px-4 rounded  active:border-gray-500">
                        -
                    </button>
                    <button onClick={() => addToCart(product.id)} className="bg-gray-200 hover:bg-gray-100 border border-black border-opacity-25 text-black font-bold py-2 px-4 rounded  active:border-gray-500">
                        +
                    </button>
                    <button onClick={() => deleteFromCart(product.id)} className="bg-gray-200 hover:bg-gray-100 border border-black border-opacity-25 text-black font-bold py-2 px-4 rounded  active:border-gray-500 hover:text-red-700">
                        🗑
                    </button>
                </div>
            </div>
        </>
    )
}