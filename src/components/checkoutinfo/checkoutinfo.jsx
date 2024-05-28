import React, { useState, useEffect, useContext } from "react";
import Modal from "../kvitto/kvitto.jsx"; // Adjust the path based on the actual location of kvitto.jsx
import { ShopContext } from "../../context/shopcontext.jsx";

export default function CheckOutInfo() { 
  const {cart, cartProducts}   = useContext(ShopContext)  // Om useEfecct används så ha { initialFormData } som input
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    zip: "",
    city: "",
    phone: "",
    email: "",
  
  });

  

  const [modalOpen, setModalOpen] = useState(false); // State to manage modal visibility

  const handleChange = (e) => {
  
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = Object.values(formData).every((field) => field.trim() !== '');
    if (isFormValid) {    
      setModalOpen(true); // Open the modal on form submission
     } else {
      alert('Please fill out all fields');
    }
  };

  return (
    <div className="w-[80vw] lg:w-[50vw] p-6 bg-gray-300 shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Delivery information</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            id="fullName"
            name="fullName"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Full name"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            id="address"
            name="address"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div className="flex mb-4">
          <div className="w-1/2 mr-2">
            <input
              type="text"
              id="zip"
              name="zip"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Zip code"
              value={formData.zip}
              onChange={handleChange}
            />
          </div>
          <div className="w-1/2 ml-2">
            <input
              type="text"
              id="city"
              name="city"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
        </div>
        <hr className='border-gray-400'></hr>
        <div className="my-4">
          <input
            type="text"
            id="phone"
            name="phone"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Phone number (+XX) XX-XXX XX XX"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gray-200 hover:bg-gray-300 border border-black border-opacity-25 text-black font-bold py-2 px-4 rounded mx-0 my-4 active:border-gray-500"
        >
          Place Order
        </button>
      </form>
      
      {modalOpen && (
        <Modal
          cart={cart}
          cartProducts={cartProducts}
          formData={formData}
          closeModal={() => setModalOpen(false)}
        />
      )}
    </div>
  );
}
