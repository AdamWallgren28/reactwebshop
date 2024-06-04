import React,  {useContext} from "react"
import { ShopContext } from "../../context/shopcontext";
// import OrderSummery from "../ordersummery/ordersummery";
import CartItem from "../cartitem/cartitem"
import { Link } from "react-router-dom"




export default function ToggleCart({ isCartVisible }){
    const {cart, cartProducts, cartSum} = useContext(ShopContext);
    const deliveryCost = Number(cartSum(cartProducts)) < 500 ? 4.95 : 0 ;
    const grandTot = deliveryCost + Number(cartSum(cartProducts));


    return (
        <>
            <div className="w-[100vw] lg:w-[60vw] bg-gray-200 absolute top-0 right-0 z-20 p-4 shadow-lg">
                {/* <div className='h-30'></div> */}
            
                <p className='mt-40'>ToggleCart!!!</p>        
                <div className='flex flex-col items-center'>
                    {cartProducts.map((product) => (
                        <CartItem key={product.id} product={product} quantity={cart[product.id]}/>
                    ))}
                    {/* <OrderSummery cart={cart} cartProducts={cartProducts} /> */}
                    <p className='text-xs mt-2'> Total cost: $ {cartSum(cartProducts)}</p>
                    <p className='text-xs mb-2'>Delivery cost: $ {deliveryCost}</p>
                    <hr className=' border-gray-400'></hr>
                    <p  className='mt-2'>Total cost: $ {(grandTot).toFixed(2)} </p>
                </div>   

                <p className="ml-4 bg-gray-300 hover:bg-gray-100 border border-gray-600 border-opacity-25 text-black py-2 px-4 rounded active:border-gray-500">
                    <Link to='/checkout'>To Checkout</Link>
                </p>
            </div>
        </>

    )
}
