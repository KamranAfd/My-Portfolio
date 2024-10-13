import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://source.unsplash.com/random/1920x1080?cinematic')",
          filter: "brightness(50%)"
        }}
      ></div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Kamran Edits – Your Vision, Perfectly Edited!</h1>
        <p className="text-xl mb-8">Professional Video Editing & Design Services to Bring Your Ideas to Life.</p>
        <a
          href="#contact"
          className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-300 transition duration-300"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Hero;