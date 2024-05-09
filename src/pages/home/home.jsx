import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <div className='flex justify-center'>
                <div className="w-[80vw] h-[80vh]">
                    <h1 className='p-4  text-center'>Welcome!</h1>
                    <Link to='/productlist'><button>Shop now!</button></Link>
                </div>
            </div>
        </>
    )
}