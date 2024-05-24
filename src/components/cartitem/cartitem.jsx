import { React, useContext } from "react";
import { ShopContext } from "../../context/shopcontext";


export default function CartItem({product, quantity, toggle=false}) {

const {addToCart, removeFromCart, deleteFromCart} = useContext(ShopContext);

return(
        <>
            <div className={`m-4 p-4 ${toggle ? 'w-[30vw]': 'w-[50vw]'} bg-gray-300 rounded-lg flex justify-between`}>  
                <div className="flex">
                    <img src={product.thumbnail} alt="product" className='w-[8vw] h-[6vw] rounded-lg'/>
                    <div className='mx-4'>
                        <h2 className='font-bold'>{product.title}</h2>
                        <h3 className='text-green-500'>${product.price}</h3>
                    </div>
                </div>              
                
                <div className="mx-4">                    
                    <h2>qty: {quantity}</h2>
                    <h2 className="font-bold">Tot: ${(product.price*quantity).toFixed(2)}</h2>
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