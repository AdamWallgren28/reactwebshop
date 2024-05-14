
import React from 'react';

export default function Footer () {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 flex-col justify-between h-full">
        <div className="flex justify-between items-center">
          <div>
            <p>&copy; {new Date().getFullYear()}, Mattias Fucik and Belphegor Develpment AB. All rights reserved.</p>
            <p>If you liked this website, you can see more of my work at: <a href="https://github.com/AdamWallgren28">My GitHub</a></p>
            <p>or: <a href="https://adamwallgren28.github.io/ProjektArbeteVT24/">My portfolio website</a></p>
           
          </div>
          <div>
            <a href="/about" className="text-gray-300 hover:text-white">About</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

