import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <div className='flex justify-center bg-cover bg-center' style={{backgroundImage: "url('https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}>
                <div className="w-[80vw] min-h-screen flex justify-start flex-col items-center ">
                    <h1 className='p-4  text-center'>Welcome!</h1>
                    <Link to='/productlist'>
                        <button className=" bg-gray-200 hover:bg-gray-300 border border-black border-opacity-25 text-black font-bold py-2 px-4 rounded  active:border-gray-500">
                            Shop now!
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}