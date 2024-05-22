// import  React, { useState } from "react";
// import OrderSummery from "../ordersummery/ordersummery";
// import CheckOutInfo from "../checkoutinfo/checkoutinfo";

// export default function Kvitto({cart, cartProducts}){

//     const [forminfo, setForminfo] = useState({});

//     return (
//         <div>
//             <h2>Your Order confirmation (Take a screenshot)</h2>
//             <OrderSummery cart={cart} cartProducts={cartProducts} />    
//             <CheckOutInfo setForminfo={setForminfo} />
//         </div>
//     )
// }

import React, { useContext} from "react";
import { ShopContext } from "../../context/shopcontext";
import OrderSummery from "../ordersummery/ordersummery";


const Modal = ({ formData, closeModal }) => {

    const {cart, fetchData, deleteCart} = useContext(ShopContext);
    const cartProducts = fetchData.filter((product) => cart[product.id] > 0 );

    const handleClose = () => {
        deleteCart();
        closeModal();
        
    }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-x-hidden overflow-y-auto backdrop-blur bg-black bg-opacity-30">
        <div className='my-4'>
        <div className="bg-white rounded-lg shadow-lg">
          <div className="p-4">
            <h3 className="text-xl text-center font-bold mb-2">This is your recipt!</h3>
            <h3 className="text-l text-center mb-6">(Take a screenshot)</h3>
            <OrderSummery cart={cart} cartProducts={cartProducts} />
            <div className='bg-gray-300 m-4 px-4 py-2 rounded-lg w-[50vw]'>
                <div className="text-center font-bold my-2">Customer Information</div>
                {/* <input className="mb-2">Full Name: {formData.fullName}</input>*/}

                <input
                    type="text"
                    className="text-xs w-full px-2 py-1 border rounded-md mb-2"            
                    value={formData.fullName}
                />
                <input
                    type="text"
                    className="text-xs w-full px-2 py-1 border rounded-md mb-2"            
                    value={formData.address}
                />
                <div className='flex gap-2'>
                    <input
                        type="text"
                        className="text-xs w-full px-2 py-1 border rounded-md mb-2"            
                        value={formData.zip}
                    />
                    <input
                        type="text"
                        className="text-xs w-full px-2 py-1 border rounded-md mb-2"            
                        value={formData.city}
                    />
                </div>
                <input
                    type="text"
                    className="text-xs w-full px-2 py-1 border rounded-md mb-2"            
                    value={formData.phone}
                />
                <input
                    type="text"
                    className="text-xs w-full px-2 py-1 border rounded-md mb-2"            
                    value={formData.email}
                />
       
            </div>  
            <div>
                <button
                className="bg-gray-200 hover:bg-gray-300 border border-black border-opacity-25 text-black font-bold py-2 px-4 rounded"
                onClick={handleClose}
                >
                Close recipt
                </button>
            </div> 
            
          </div>
        </div>
        </div>
    </div>
  );
};

export default Modal;

