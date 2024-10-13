import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Videos from './components/Videos';
import Reels from './components/Reels';
import Thumbnails from './components/Thumbnails';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="content-overlay">
        <Videos />
        <Reels />
        <Thumbnails />
        <Testimonials />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;