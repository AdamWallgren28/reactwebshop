import React, { createContext, useState, useEffect } from "react";
 
export let ShopContext = createContext(null);

export default function ShopContextPlusAndMinus (props) {
    let[fetchData, setFetchData] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=10')
          .then(res => res.json())
          .then(json => {
            setFetchData(json.products); // Update state with fetched data
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, []); // Tom vektor, gör att funtionen enbart körs en gång?

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

    let contextValue = {cart, addToCart, removeFromCart, deleteFromCart, fetchData};
    
    console.log(cart);

    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};
