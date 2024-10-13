import React from 'react';
import { Play } from 'lucide-react';

const videoProjects = [
  { id: 1, title: 'Corporate Ad', thumbnail: 'https://source.unsplash.com/random/800x600?corporate' },
  { id: 2, title: 'YouTube Documentary', thumbnail: 'https://source.unsplash.com/random/800x600?documentary' },
  { id: 3, title: 'Music Video', thumbnail: 'https://source.unsplash.com/random/800x600?music' },
  { id: 4, title: 'Product Showcase', thumbnail: 'https://source.unsplash.com/random/800x600?product' },
  { id: 5, title: 'Travel Vlog', thumbnail: 'https://source.unsplash.com/random/800x600?travel' },
  { id: 6, title: 'Event Highlights', thumbnail: 'https://source.unsplash.com/random/800x600?event' },
];

const Videos = () => {
  return (
    <section id="videos" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Video Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoProjects.map((project) => (
            <div key={project.id} className="relative group">
              <img src={project.thumbnail} alt={project.title} className="w-full h-64 object-cover rounded-lg shadow-md" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Play className="text-white" size={48} />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{project.title}</h3>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300"
          >
            View More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Videos;