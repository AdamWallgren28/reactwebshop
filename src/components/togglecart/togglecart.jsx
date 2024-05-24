import React from "react"
// import CartItem from "../cartitem/cartitem"



export default function ToggleCart({ isCartVisible }){

    return (
        <>
            {isCartVisible && <div className="w-[40vw] bg-gray-300 absolute top-0 right-0 z-2 p-4 shadow-lg">
                <p className='mt-40'>ToggleCart</p>
                <p>ToggleCart</p>
                <p>ToggleCart</p>
                <p>ToggleCart</p>
                <p>ToggleCart</p>
                <p>ToggleCart</p>
                <p>ToggleCart</p>
                {/* {cartProducts.map((product) => (
                    <CartItem toggle={true} key={product.id} product={product} quantity={cart[product.id]}/>
                ))} */}
            </div>}
        </>

    )
}
