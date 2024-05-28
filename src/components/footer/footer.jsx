
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer () {
  return (
    <footer className="bg-gray-200 py-6 shadow-upper">
      <div className="container mx-auto px-4 flex-col justify-between h-full">
        <div className="flex flex-col justify-between items-center">
          <div>
            <Link to='/about'>
                <button className="bg-gray-200 hover:bg-gray-100 border border-black border-opacity-25 text-black font-bold my-4 py-2 px-4 rounded active:border-gray-500 self-end">About</button>
            </Link>          
          </div>
          <div className='flex flex-col lg:items-center mb-8'>
            <p>&copy; {new Date().getFullYear()}, Mattias Fucik and Belphegor Develpment AB. All rights reserved.</p>
            <p>If you liked this website, you can see more of my work at: <a href="https://github.com/AdamWallgren28" className="text-blue-500">My GitHub</a></p>
            <p>or: <a href="https://adamwallgren28.github.io/ProjektArbeteVT24/" className="text-blue-500">My portfolio website</a></p>
           
          </div>
          
        </div>
      </div>
    </footer>
  );
};

