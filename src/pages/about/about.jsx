import React from "react";
import { Link } from "react-router-dom";


export function About() {
    return (
        <>
            <div className='min-h-screen flex justify-center bg-cover bg-center' style={{backgroundImage: "url('https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}>
                <div className="w-[70vw] h-[50vh] bg-[white] bg-opacity-70  p-8 m-8 rounded-lg">
                    <h1 className='p-4  text-center'>About "My First Web Shop"</h1>
                    <p>This is a school project to build a webshop. This is not a real shop. No products will be shipped to you (or anyone). You won't be charged for any product or shipping. If however, you like my project and want to support me - feel free to send money via Swish at: +46 (0)76-226 88 28.</p>
                    <div className="flex justify-center">
                        <Link to='/productlist'>
                            <button className=" mt-16 bg-gray-200 hover:bg-gray-300 border border-black border-opacity-25 text-black font-bold py-2 px-4 rounded active:border-gray-500">
                                Shop now!
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}