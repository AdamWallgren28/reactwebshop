import React, { useState, useEffect } from 'react';

export default function CheckOut() {
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

  ///////////////////////////////////////////////////////////////////////////////
let [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    billingAddress: {
      zipCode: '',
      city: '',
      country: ''
    },
    phoneNumber: '',
    email: '',
    deliveryAddress: {
      street: '',
      zipCode: '',
      city: '',
      country: ''
    },
    agreeToTerms: false,
    receiveSpam: false
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    if (type === 'checkbox') {
      setFormData(prevData => ({
        ...prevData,
        [name]: checked
      }));
    } else if (name.includes('billingAddress') || name.includes('deliveryAddress')) {
      const addressField = name.split('.')[1];
      setFormData(prevData => ({
        ...prevData,
        [name.split('.')[0]]: {
          ...prevData[name.split('.')[0]],
          [addressField]: value
        }
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };
///////////////////////////////////////////////////////////////////////////////
  

  return (
    <>   
      <div className="flex justify-center">
            <div  className='w-[80vw]'>
                <h1>Checkout</h1>
                <ul>
                {fetchData.map((product, index) => (
                    <div className="bg-gray-200 p-4 border-2 rounded m-7 ">
                        <li key={index}>                
                            <img src={product.thumbnail} alt="product" className='w-[6vw] h-[4vw]'/>
                            <h2 className='font-bold'>{product.title}</h2>    
                            <h3 className='text-green-500'>${product.price}</h3>
                            <button class="bg-gray-200 hover:bg-gray-300 border border-black border-opacity-25 text-black font-bold py-2 px-4 rounded">
                                -
                            </button>
                            <button class="bg-gray-200 hover:bg-gray-300 border border-black border-opacity-25 text-black font-bold py-2 px-4 rounded">
                                +
                            </button>            
                        </li>
                    </div>
                ))}          
                </ul>
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-gray-200 p-8">
                    <div className="mb-4">
                        <label htmlFor="firstName" className="block font-medium text-gray-700">First Name</label>
                        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lastName" className="block font-medium text-gray-700">Last Name</label>
                        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </div>
                    <hr />
                    {/* Similarly add inputs for Phone Number, Email */}
                    <div className="mb-4">
                        <label htmlFor="Adress" className="block font-medium text-gray-700">Adress:</label>
                        <input type="text" id="street" name="street" value={formData.street} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="zipCode" className="block font-medium text-gray-700">Zip Code</label>
                        <input type="text" id="zipCode" name="zipCode" value={formData.zipCode} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="city" className="block font-medium text-gray-700">City</label>
                        <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="country" className="block font-medium text-gray-700">country</label>
                        <input type="text" id="country" name="country" value={formData.country} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="agreeToTerms" className="flex items-center">
                        <input type="checkbox" id="agreeToTerms" name="agreeToTerms" checked={formData.agreeToTerms} onChange={handleChange} className="form-checkbox h-5 w-5 text-indigo-600" />
                        <span className="ml-2 text-gray-700">I have read terms and conditions</span>
                        </label>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="receiveSpam" className="flex items-center">
                        <input type="checkbox" id="receiveSpam" name="receiveSpam" checked={formData.receiveSpam} onChange={handleChange} className="form-checkbox h-5 w-5 text-indigo-600" />
                        <span className="ml-2 text-gray-700">I want to receive spam from this webshop</span>
                        </label>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Place order</button>
                </form>
            </div>
      </div>
    </>
  );
}

