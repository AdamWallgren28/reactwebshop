import React, {useContext } from 'react';
import {ShopContext} from '../../context/shopcontext';
import { Link } from 'react-router-dom';

export default function ProductCard() {
  let {addToCart, fetchData} = useContext(ShopContext);

  return (
    <>
      <div className="flex justify-center bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}>
        <div className="flex flex-col justify-center w-[90vw] lg:w-[70vw] bg-[white] bg-opacity-80 p-8 m-8 rounded-lg shadow-lg">
  
          <h1 className="text-2xl font-bold mb-4 my-8">Products:</h1>   
          <ul className='flex flex-wrap justify-center lg:justify-between'>
            {fetchData.map((product) => (
              <div key={product.id} className="bg-gray-300 max-w-sm px-4 pb-4  my-7 rounded-lg shadow-xl w-[80vw] lg:w-[20vw]">
                <li className='h-[100%] flex flex-col justify-between'>
                  <Link to={`/productpage/${product.id}`}>
                    <img src={product.thumbnail} alt="product" className='w-[100%]'/>
                  </Link>
                  <h2 className='font-bold'>
                    <Link to={`/productpage/${product.id}`}>{product.title}</Link>
                  </h2>
                  <h5 className='hidden'>{product.description}</h5>
                  <h3 className='text-green-500'>${product.price}</h3>
                  <button onClick={() => addToCart(product.id)} className="bg-gray-200 hover:bg-gray-100 border border-black border-opacity-25 text-black font-bold py-2 px-4 rounded active:border-gray-500">
                    Add to chart
                  </button>
                </li>
              </div>
            ))}          
          </ul>
        </div>  
      </div>     
    </>
  );
}


