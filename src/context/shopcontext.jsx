import React, { createContext, useState, useEffect } from 'react';
// import { useLocation } from "react-router-dom";

export let ShopContext = createContext(null);
export default function ShopContextPlusAndMinus (props) {

// state för att visa/dölja toggleCart
    const [showing, setShowing] = useState(false);

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
    }, []); // Tom vektor för att rendera "once at mount".

// Deklarerar kundkorg (eller hämtar från localstorage vid reload)
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : {};
    });
    
// Nedan följer funktioner för att regigera innehållet i kundkorgen
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

// Funktioner för att hålla reda på kundorg (och tot.kostnad) - useEffect för att spara lokalt, vid reLoad
    const cartProducts = fetchData.filter((product) => cart[product.id] > 0);

    function cartSum(cartProducts) {
        
        const cartSumTotal = cartProducts.reduce((sum, product) => {
            const reaOrFullPrice = product.category === 'tablets' ? (product.price * cart[product.id] / 2) : product.price * cart[product.id];;
            return sum + reaOrFullPrice;
        }, 0);
        
        return cartSumTotal.toFixed(2);
    }

// Spar kundkorg i localStorage
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    }, [cart, cartProducts]);

    const deliveryCost = Number(cartSum(cartProducts)) > 0 && Number(cartSum(cartProducts)) < 500 ? 4.95 : 0 ;
    const grandTot = deliveryCost + Number(cartSum(cartProducts));


// Exporterad context
    let contextValue = {cart, addToCart, removeFromCart, deleteFromCart, deleteCart, fetchData, cartSum, cartProducts, showing, setShowing, grandTot, deliveryCost};

    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};
