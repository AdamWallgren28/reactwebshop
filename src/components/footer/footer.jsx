
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer () {
  return (
    <footer className="bg-gray-200 py-6 shadow-lg">
      <div className="container mx-auto px-4 flex-col justify-between h-full">
        <div className="flex justify-between items-center">
          <div>
            <p>&copy; {new Date().getFullYear()}, Mattias Fucik and Belphegor Develpment AB. All rights reserved.</p>
            <p>If you liked this website, you can see more of my work at: <a href="https://github.com/AdamWallgren28" className="text-blue-500">My GitHub</a></p>
            <p>or: <a href="https://adamwallgren28.github.io/ProjektArbeteVT24/" className="text-blue-500">My portfolio website</a></p>
           
          </div>
          <div>
            <Link to='/about'>
                <p className="bg-gray-200 hover:bg-gray-100 border border-black border-opacity-25 text-black font-bold py-2 px-4 rounded active:border-gray-500">About</p>
            </Link>          
          </div>
        </div>
      </div>
    </footer>
  );
};

