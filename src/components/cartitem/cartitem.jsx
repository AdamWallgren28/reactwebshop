import { React, useContext } from "react";
import { ShopContext } from "../../context/shopcontext";
import { Link } from 'react-router-dom';


export default function CartItem({product, quantity}) {

const {addToCart, removeFromCart, deleteFromCart} = useContext(ShopContext);

return(
        <>
            <div className={`m-4 p-4 w-[80vw] lg:w-[50vw] bg-gray-300 rounded-lg flex justify-between`}>  
                <div className="flex flex-col lg:flex-row items-start">
                    <Link to={`/productpage/${product.id}`} className='w-[25%]'>
                        <img src={product.thumbnail} alt="product" />
                    </Link>
                    <div className='pt-0 lg:pt-4 pr-4 self-start'>
                        <Link to={`/productpage/${product.id}`}>
                            <h2 className='font-bold'>{product.title}</h2>
                        </Link>
                        <h3 className='text-green-500'>${product.price}</h3>
                    </div>
                </div>              
                
                <div className="min-w-[35%] lg:min-w-[132px] self-end">
                    <h2>qty: {quantity}</h2>
                    <h2 className="font-bold">Tot: ${(product.price*quantity).toFixed(2)}</h2>
                    <button onClick={() => removeFromCart(product.id)} className="bg-gray-200 hover:bg-gray-100 border border-black border-opacity-25 text-black font-bold py-1 px-3 rounded  active:border-gray-500">
                        -
                    </button>
                    <button onClick={() => addToCart(product.id)} className="bg-gray-200 hover:bg-gray-100 border border-black border-opacity-25 text-black font-bold py-1 px-3 rounded  active:border-gray-500">
                        +
                    </button>
                    <button onClick={() => deleteFromCart(product.id)} className="bg-gray-200 hover:bg-gray-100 border border-black border-opacity-25 text-black font-bold py-1 px-3 rounded  active:border-gray-500 hover:text-red-700">
                        🗑
                    </button>
                </div>
            </div>
        </>
    )
}