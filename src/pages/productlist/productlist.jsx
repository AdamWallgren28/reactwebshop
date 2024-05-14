import React, {useContext } from 'react';
import {ShopContext} from '../../context/shopcontext';

export default function ProductCard() {
  let {addToCart, fetchData} = useContext(ShopContext);

  return (
    <>
      <div className="flex justify-center bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}>
      
      
      <div className="flex flex-col justify-center w-[80vw]  bg-[white] bg-opacity-80 p-8">
    
       <h1 className="my-8">Products:</h1>     
        <ul className='flex flex-wrap  justify-between'>
          {fetchData.map((product) => (
            <div key={product.id} className="bg-gray-200 max-w-sm p-4 border-2 rounded my-7 rounded-lg">
              <li>
                <img src={product.thumbnail} alt="product" className='w-[18vw] h-[14vw] rounded-lg'/>
                <h2 className='font-bold'>{product.title}</h2>
                <h5 className='hidden'>{product.description}</h5>
                <h3 className='text-green-500'>${product.price}</h3>
                <button onClick={() => addToCart(product.id)} className="bg-gray-200 hover:bg-gray-300 border border-black border-opacity-25 text-black font-bold py-2 px-4 rounded">
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


