
import React from 'react';

export default function Footer () {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 flex-col justify-between h-full">
        <div className="flex justify-between items-center">
          <div>
            <p>&copy; {new Date().getFullYear()} Your Website Name. All rights reserved.</p>
            <p>Subscribe to our newsletter:</p>
            {/* Add your email subscription form here */}
          </div>
          <div>
            <a href="/about" className="text-gray-300 hover:text-white">About</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

