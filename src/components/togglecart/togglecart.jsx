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
            <div className="w-[100vw] lg:w-[34vw] max-h-[80vh] lg:max-h-[80vh] overflow-auto bg-gray-200 fixed top-0 right-0 z-20 px-8 py-4 shadow-2xl">
                {/* <div className='h-30'></div> */}
            
                <p className='mt-40 text-xl font-bold'>Your cart:</p>        
                <div className='flex flex-col items-center'>
                    {cartProducts.map((product) => (
                        <CartItem key={product.id} product={product} quantity={cart[product.id]} isToggle={true}/>
                    ))}
                    {/* <OrderSummery cart={cart} cartProducts={cartProducts} /> */}
                    <div className='self-start'>
                        <p className='text-xs lg:text-sm mt-2'> Order cost: $ {cartSum(cartProducts)}</p>
                        <p className='text-xs lg:text-sm mb-2'>Delivery cost: $ {deliveryCost}</p>
                        <hr className=' border-gray-400'></hr>
                        <p  className='mt-2 lg:text-lg font-bold'>Grand total: $ {(grandTot).toFixed(2)} </p>
                    </div>
                </div>   

                <button className=" bg-gray-300 hover:bg-gray-100 border border-gray-600 border-opacity-25 mt-4 text-black py-2 px-4 rounded active:border-gray-500">
                    <Link to='/checkout'>To Checkout</Link>
                </button>
            </div>
        </>

    )
}
