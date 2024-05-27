import React, { createContext, useState, useEffect } from "react";
 
export let ShopContext = createContext(null);

export default function ShopContextPlusAndMinus (props) {

    // Hämtar prudukter via API
    let[fetchData, setFetchData] = useState([]);

    useEffect(() => {
        const fetchTablets = fetch('https://dummyjson.com/products/category/tablets').then(res => res.json());
        const fetchLaptops = fetch('https://dummyjson.com/products/category/laptops').then(res => res.json());
        const fetchMobileAccessories = fetch('https://dummyjson.com/products/category/mobile-accessories').then(res => res.json());
        
        Promise.all([fetchTablets, fetchLaptops, fetchMobileAccessories])
        .then(([tabletsData, laptopsData, mobileAccessoriesData]) => {
            const combinedData = [...laptopsData.products, ...tabletsData.products, ...mobileAccessoriesData.products];
            setFetchData(combinedData);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, []); // Tom vektor för att köra efter rendering



    // Nedan följer funktioner för att regigera innehållet i kundkorgen
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

    function deleteCart() {
        setCart({}) ;
    }

    let contextValue = {cart, addToCart, removeFromCart, deleteFromCart, deleteCart, fetchData};

    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};
