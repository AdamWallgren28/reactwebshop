import React, { createContext, useState } from "react";
 

export const ShopContext = createContext(null);

export default function ShopContextPlusAndMinus (props) {
    let [cart, setCart] = useState({});

    function addToCart(itemId) {
        setCart((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
    }

    function removeFromCart(itemId) {
        setCart((prev) => {
            if (prev[itemId] > 1) {
                return { ...prev, [itemId]: prev[itemId] - 1 };
            } else {
                let updatedCart = { ...prev };
                delete updatedCart[itemId];
                return updatedCart;
            }
        });
    }

    function deleteFromCart(itemId) {
        setCart((prev) => {
            let updatedCart = { ...prev };
            delete updatedCart[itemId];
            return updatedCart;
        });
    }

    let contextValue = {cart, addToCart, removeFromCart, deleteFromCart};
    
    console.log(cart);

    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};