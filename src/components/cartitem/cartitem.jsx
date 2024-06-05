import { React, useContext } from "react";
import { ShopContext } from "../../context/shopcontext";
import { Link } from 'react-router-dom';


export default function CartItem({product, quantity, isToggle=false}) {

const {addToCart, removeFromCart, deleteFromCart, cart} = useContext(ShopContext);

return(
        <>
            <div className={`m-4 p-4 w-[80vw] ${isToggle ? 'lg:w-[30vw]' : 'lg:w-[50vw]' } bg-gray-300 rounded-lg flex justify-between`}>  
                <div className="flex flex-col lg:flex-row items-start">
                    <Link to={`/productpage/${product.id}`} className='w-[25%]'>
                        <img src={product.thumbnail} alt="product" />
                    </Link>
                    <div className='pt-0 lg:pt-8 pr-4 self-start'>
                        <Link to={`/productpage/${product.id}`}>
                            <h2 className='font-bold'>{product.title}</h2>
                        </Link>
                        <h3 className='text-green-500'>
                            {product.category === 'tablets' ? <span className='text-red-600'>$ {(product.price * 0.5).toFixed(2)}</span> : <span>$ {product.price}</span>}
                        </h3>
                    </div>
                </div>              
                
                <div className="min-w-[40%] lg:min-w-[132px] self-end">
                    <h2>qty: {quantity}</h2>
                    <h2 className="font-bold">Tot: 
                        {product.category === 'tablets' ? <span className='text-red-600'>$ {(product.price * cart[product.id] * 0.5).toFixed(2)}</span> : <span>$ {(product.price*cart[product.id]).toFixed(2)}</span>}
                    </h2>
                    <button onClick={() => removeFromCart(product.id)} className="bg-gray-200 hover:bg-gray-100 border border-black border-opacity-25 text-black font-bold py-1 px-3 rounded  active:border-gray-500">
                        -
                    </button>
                    <button onClick={() => addToCart(product.id)}
                        className="bg-gray-200 hover:bg-gray-100 border border-black border-opacity-25 text-black font-bold py-1 px-3 rounded  active:border-gray-500"
                        disabled={product.stock < 1 || quantity >= product.stock}
                        >
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