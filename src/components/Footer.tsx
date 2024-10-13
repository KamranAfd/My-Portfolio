import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Kamran Edits</h3>
            <p className="text-gray-300">Professional Video Editing & Design Services</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#videos" className="text-gray-300 hover:text-white">Videos</a></li>
              <li><a href="#reels" className="text-gray-300 hover:text-white">Reels</a></li>
              <li><a href="#thumbnails" className="text-gray-300 hover:text-white">Thumbnails</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Contact Information</h4>
            <p className="text-gray-300">Email: contact@kamranedits.com</p>
            <p className="text-gray-300">Phone: +1 (123) 456-7890</p>
            <p className="text-gray-300">Location: Los Angeles, CA</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">&copy; 2023 Kamran Edits. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;