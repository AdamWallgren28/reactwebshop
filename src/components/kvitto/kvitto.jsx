import  React, { useState } from "react";
import OrderSummery from "../ordersummery/ordersummery";
import CheckOutInfo from "../checkoutinfo/checkoutinfo";

export default function Kvitto({cart}, {cartProducts}){

    const [forminfo, setForminfo] = useState({});

    return (
        <div>
            <h2>Your Order confirmation (Take a screenshot)</h2>
            <OrderSummery cart={cart} cartProducts={cartProducts} />    
            <CheckOutInfo {setForminfo} />
        </div>
    )
}