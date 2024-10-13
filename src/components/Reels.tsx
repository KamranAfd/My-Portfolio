import React from 'react';
import { Play } from 'lucide-react';

const reels = [
  { id: 1, platform: 'Instagram', length: '15s', thumbnail: 'https://source.unsplash.com/random/400x600?instagram' },
  { id: 2, platform: 'TikTok', length: '30s', thumbnail: 'https://source.unsplash.com/random/400x600?tiktok' },
  { id: 3, platform: 'Instagram', length: '60s', thumbnail: 'https://source.unsplash.com/random/400x600?reels' },
];

const Reels = () => {
  return (
    <section id="reels" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Reels</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {reels.map((reel) => (
            <div key={reel.id} className="w-64 relative group">
              <img src={reel.thumbnail} alt={`${reel.platform} Reel`} className="w-full h-96 object-cover rounded-lg shadow-md" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Play className="text-white mb-2" size={48} />
                <p className="text-white text-sm">{reel.platform} • {reel.length}</p>
                <button className="mt-4 bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition duration-300">
                  Watch Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reels;