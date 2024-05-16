import { React } from "react";

export default function CheckOutInfo () {

    return (
        <div className="w-[50vw] p-6 bg-gray-300 shadow-md rounded-lg">
        <h2 className="text-xl font-bold mb-4">Delivery informaion</h2>
          <form>
            <div className="mb-4">                    
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Full name"
              />
            </div>
            <div className="mb-4">                     
              <input
                type="text"
                id="address"
                name="address"
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Adress"
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
                />
              </div>
              <div className="w-1/2 ml-2">                        
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="City"
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
              />
            </div>
            <div className="mb-4">                     
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border rounded-md"
                placeholder="email"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-200 hover:bg-gray-300 border border-black border-opacity-25 text-black font-bold py-2 px-4 rounded mx-0 my-4  active:border-gray-500"
            >
              Place Order
            </button>
          </form>
        </div>

    )
}

