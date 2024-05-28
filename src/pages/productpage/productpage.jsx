import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../../context/shopcontext';

export default function ProductPage() {
  const { productId } = useParams();
  const { fetchData, addToCart } = useContext(ShopContext);

  const product = fetchData.find((product) => product.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className='flex justify-center bg-cover bg-center' style={{backgroundImage: "url('https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}>
        <div className='w-[90vw] lg:w[70vw] flex flex-col lg:flex-row justify-start  bg-[white] bg-opacity-80 p-8 m-8 rounded-lg'>

            <img src={product.thumbnail} alt="product" className="w-[100%] lg:w-[30vw]"/>          
            <div className='ml-4'>
              <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
              <p>Description:</p>
              <p><em>{product.description}</em></p>
              <p className='mt-2'>Price: <span className='text-green-600'>${product.price}</span></p>      
              <button onClick={() => addToCart(product.id)} className=" bg-gray-200 hover:bg-gray-100 border border-black border-opacity-25 text-black font-bold py-2 px-4 rounded  active:border-gray-500">
                  Add to cart!
              </button>
            </div>
        </div>
    </div>
  );
}