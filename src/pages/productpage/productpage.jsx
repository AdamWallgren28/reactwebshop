import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ShopContext } from '../../context/shopcontext';

export default function ProductPage() {
  const { productId } = useParams();
  const { fetchData, addToCart, cart} = useContext(ShopContext);

  const product = fetchData.find((product) => product.id === parseInt(productId));



  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className='flex justify-center bg-cover bg-center' style={{backgroundImage: "url('https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}>
        <div className='w-[90vw] lg:w-[70vw] flex flex-col justify-start  bg-[white] bg-opacity-80 p-8 m-8 rounded-lg'>
        <div className='flex flex-col lg:flex-row justify-start'>
            <img src={product.thumbnail} alt="product" className={`w-[100%] lg:w-[30vw] ${product.stock < 1 ? 'grayscale' :''}`}/>
            {/* ${product.stock < 1 ? 'grayscale' : ''} */}
            <div className='ml-4'>
              <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
              <p>Description:</p>
              <p><em>{product.description}</em></p>
              <p className='mt-2'>Price: <span className={`mx-4 ${product.category === 'tablets' ? 'text-black line-through' : 'text-green-500'}`}>${product.price}</span>
                    {product.category === 'tablets' ? <span className='text-red-600'>$ {(product.price * 0.3).toFixed(2)}</span> : ''}</p>
              <p>In stock : <span className={product.stock < 10 ? 'text-red-600' : ''}>{product.stock} pcs</span></p>     
              <button onClick={() => addToCart(product.id)}
                className={` bg-gray-200 border border-black border-opacity-25 text-black ${product.stock < 1 ? 'text-gray-400' : ' active:border-gray-500  hover:bg-gray-100' } font-bold py-2 px-4 rounded `}
                disabled={product.stock < 1 || cart[product.id] >= product.stock}
                >
                  Add to cart!
              </button>
            </div>
            </div>
            <Link to='/productlist' className='self-center'>
                <button className="mt-16  bg-gray-200 hover:bg-gray-300 border border-black border-opacity-25 text-black font-bold py-2 px-4 rounded my-4  active:border-gray-500">
                    Back to shopping!
                </button>
            </Link> 
        </div>
        
    </div>
  );
}