import React from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <img
              src="https://i.imgur.com/Hy9Hy9H.jpg"
              alt="Kamran"
              className="w-10 h-10 rounded-full mr-3"
            />
            <span className="text-xl font-bold text-gray-800">Kamran Edits</span>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <a href="#videos" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Videos</a>
            <a href="#reels" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Reels</a>
            <a href="#thumbnails" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Thumbnails</a>
            <a href="#testimonials" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Client Testimonials</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
          </div>
          <div className="sm:hidden flex items-center">
            <button type="button" className="text-gray-600 hover:text-gray-900">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;