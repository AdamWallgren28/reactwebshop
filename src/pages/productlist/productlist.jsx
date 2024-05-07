import React, { useState, useEffect } from 'react';

export default function ProductCard() {
  let[fetchData, setFetchData] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=100')
      .then(res => res.json())
      .then(json => {
        setFetchData(json.products); // Update state with fetched data
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Tom vektor, gör att funtionen enbart körs en gång?

  return (
    <>
      <h1>Product List</h1>
      <ul>
        {fetchData.map((product, index) => (
          <div className="bg-gray-200 max-w-sm p-4 border-2 rounded m-7">
            <li key={index}>
              <img src={product.images[0]} alt="product" />
              <h2>{product.title}</h2>
              <h5>{product.description}</h5>
              <h3 className='text-green-500'>${product.price}</h3>
              <button class="bg-gray-200 hover:bg-gray-300 border border-black border-opacity-25 text-black font-bold py-2 px-4 rounded">
                Add to chart
              </button>
            </li>
          </div>
        ))}
        
      </ul>
    </>
  );
}



// useEffect(() => {
//     const GetDataProducts = async () => {
//       const res = await fetch("https://dummyjson.com/products");
//       const products = await res.json();
//       setArrayChildren([...products]);
//     }
//     GetDataProducts();
//   }, []);