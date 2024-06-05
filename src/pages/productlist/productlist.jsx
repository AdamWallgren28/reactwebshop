import React, {useContext, useState } from 'react';

import {ShopContext} from '../../context/shopcontext';
import { Link } from 'react-router-dom';

export default function ProductCard() {
  let {addToCart, fetchData, cart} = useContext(ShopContext);

  const [selectedCategory, setSelectedCategory] = useState('');
  // const handleCategoryChange = (category) => {
  //   setSelectedCategory(category);
  // };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
};
  const filteredData = selectedCategory ? fetchData.filter(product => product.category === selectedCategory) : fetchData;

  return (
    <>
      <div className="flex h-[100%] justify-center bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}>
        <div className="flex flex-col justify-center w-[90vw] lg:w-[70vw] bg-[white] bg-opacity-80 p-8 m-8 rounded-lg shadow-lg">
  
          <h1 className="text-2xl font-bold mb-4 my-2 lg:my-8">Products:</h1>
          {/* <div className="flex flex-col lg:flex-row justify-center mb-8">
              <button onClick={() => handleCategoryChange('laptops')} className="w-[90%] lg:w-[20%] m-2 p-2 bg-blue-500 text-white rounded">Laptops</button>
              <button onClick={() => handleCategoryChange('tablets')} className="w-[90%] lg:w-[20%] m-2 p-2 bg-blue-500 text-white rounded">Tablets</button>
              <button onClick={() => handleCategoryChange('mobile-accessories')} className="w-[90%] lg:w-[20%] m-2 p-2 bg-blue-500 text-white rounded">Accessories</button>
              <button onClick={() => handleCategoryChange('')} className="w-[90%] lg:w-[20%] m-2 p-2 bg-gray-500 text-white rounded">All</button>
          </div>    */}
          <div className="flex justify-center mb-4">
                        <select
                            onChange={handleCategoryChange}
                            className="p-2 bg-gray-300 text-black rounded"
                            value={selectedCategory}
                        >
                            <option value="" className='hidden'>Select products</option>
                            <option value="">All</option>
                            <option value="laptops">Laptops</option>
                            <option value="tablets">Tablets</option>
                            <option value="mobile-accessories">Mobile Devices</option>
                        </select>
                    </div>
          <ul className='flex flex-wrap justify-center lg:justify-between'>
            {filteredData.map((product) => (
              <div key={product.id} className="bg-gray-300 max-w-sm pb-4  my-7 rounded-lg shadow-xl w-[80vw] lg:w-[20vw] overflow-hidden">
                <li className='h-[100%] flex flex-col justify-between overflow-hidden'>
                  {product.category === 'tablets' && (
                    <p className=' bg-yellow-500 flex justify-center p-1 relative left-[40%] top-[10%] rotate-45'>SALE / SALE / SALE / SALE</p>
                  )}
                  <Link to={`/productpage/${product.id}`}>
                    <img src={product.thumbnail} alt="product" className={`w-[100%] ${product.stock < 1 ? 'hidden' : '' }`} />                   
                    <img src='https://www.svgrepo.com/show/424880/sold-out-sales.svg' alt="empty cart" className={`my-4 mx-[5%] w-[90%] ${product.stock > 0 ? 'hidden' : ''}`}/>
                  </Link>
                  <h2 className=' mx-4 font-bold'>
                    <Link to={`/productpage/${product.id}`}>{product.title}</Link>
                  </h2>
                  <h5 className='hidden'>{product.description}</h5>
                  <h3>
                    <span className={`mx-4 ${product.category === 'tablets' ? 'text-black line-through' : 'text-green-500'}`}>${product.price}</span>
                    {product.category === 'tablets' ? <span className='text-red-600'>$ {(product.price * 0.5).toFixed(2)}</span> : ''}
                  </h3>
                  <p className={`text-gray-600 mx-4 ${product.stock > 0 ? 'hidden' : ''}`}>OUT OF STOCK</p>
                  <button onClick={() => addToCart(product.id)}
                    className={`mx-4 bg-gray-200 border border-black border-opacity-25 text-black ${product.stock < 1 ? 'text-gray-400' : ' active:border-gray-500  hover:bg-gray-100' } font-bold py-2 px-4 rounded `}
                    disabled={product.stock < 1 || cart[product.id] >= product.stock}
                    >
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


