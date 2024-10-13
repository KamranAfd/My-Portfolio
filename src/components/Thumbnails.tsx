import React from 'react';
import { Maximize2 } from 'lucide-react';

const thumbnails = [
  { id: 1, title: 'Cinematic Travel Vlog', image: 'https://source.unsplash.com/random/800x450?travel' },
  { id: 2, title: 'Tech Review', image: 'https://source.unsplash.com/random/800x450?technology' },
  { id: 3, title: 'Cooking Tutorial', image: 'https://source.unsplash.com/random/800x450?cooking' },
  { id: 4, title: 'Fitness Challenge', image: 'https://source.unsplash.com/random/800x450?fitness' },
  { id: 5, title: 'Gaming Livestream', image: 'https://source.unsplash.com/random/800x450?gaming' },
  { id: 6, title: 'Music Cover', image: 'https://source.unsplash.com/random/800x450?music' },
];

const Thumbnails = () => {
  return (
    <section id="thumbnails" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Thumbnails</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {thumbnails.map((thumbnail) => (
            <div key={thumbnail.id} className="relative group">
              <img src={thumbnail.image} alt={thumbnail.title} className="w-full h-48 object-cover rounded-lg shadow-md" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Maximize2 className="text-white" size={32} />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{thumbnail.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Thumbnails;