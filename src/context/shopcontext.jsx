import React, { createContext, useState, useEffect } from "react";
 
export let ShopContext = createContext(null);

export default function ShopContextPlusAndMinus (props) {
    let[fetchData, setFetchData] = useState([]);

    // useEffect(() => {
    //     fetch('https://dummyjson.com/products/category/laptops')
    //       .then(res => res.json())
    //       .then(json => {
    //         setFetchData(json.products); // Update state with fetched data
    //       })
    //       .catch(error => {
    //         console.error('Error fetching data:', error);
    //       });
    //   }, []); // Tom vektor, gör att funtionen enbart körs en gång?

      useEffect(() => {
        const fetchTablets = fetch('https://dummyjson.com/products/category/tablets').then(res => res.json());
        const fetchLaptops = fetch('https://dummyjson.com/products/category/laptops').then(res => res.json());
        const fetchMobileAccessories = fetch('https://dummyjson.com/products/category/mobile-accessories').then(res => res.json());
      
        Promise.all([fetchTablets, fetchLaptops, fetchMobileAccessories])
          .then(([tabletsData, laptopsData, mobileAccessoriesData]) => {
            const combinedData = [...laptopsData.products, ...tabletsData.products, ...mobileAccessoriesData.products];
            setFetchData(combinedData); // Update state with combined data from both categories
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, []); // Empty dependency array means this useEffect runs once after the initial render

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
    
    console.log(cart);

    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};
