import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    image: 'https://source.unsplash.com/random/100x100?portrait1',
    quote: "Kamran's editing skills transformed my raw footage into a cinematic masterpiece. Highly recommended!",
  },
  {
    id: 2,
    name: 'Jane Smith',
    image: 'https://source.unsplash.com/random/100x100?portrait2',
    quote: "Working with Kamran was a breeze. He understood my vision and delivered beyond my expectations.",
  },
  {
    id: 3,
    name: 'Mike Johnson',
    image: 'https://source.unsplash.com/random/100x100?portrait3',
    quote: "The thumbnails Kamran designed for my YouTube channel increased my click-through rate significantly!",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Client Testimonials</h2>
        <div className="relative">
          <div className="flex items-center justify-center">
            <button onClick={prevTestimonial} className="absolute left-0 text-gray-400 hover:text-gray-600">
              <ChevronLeft size={32} />
            </button>
            <div className="text-center">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <p className="text-xl italic mb-4">"{testimonials[currentIndex].quote}"</p>
              <p className="font-semibold">{testimonials[currentIndex].name}</p>
            </div>
            <button onClick={nextTestimonial} className="absolute right-0 text-gray-400 hover:text-gray-600">
              <ChevronRight size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;