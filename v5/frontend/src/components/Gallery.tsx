import React, { useState } from 'react';
import { Eye } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      url: 'images/g01.jpg',
      alt: 'Modern hotel room with wooden accents'
    },
    {
      url: 'images/g02.jpg',
      alt: 'Clean white bedding hotel room'
    },
    {
      url: 'images/g03.jpg',
      alt: 'Modern minimalist hotel room'
    },
    {
      url: 'images/g04.jpg',
      alt: 'Contemporary style hotel room'
    },
    {
      url: 'images/g05.jpg',
      alt: 'Comfortable hotel room'
    },
    {
      url: 'images/g06.jpg',
      alt: 'Professional hotel room'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-white to-amber-50/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore Our <span className="text-amber-600">Comfortable Spaces</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a tour of our beautifully designed rooms, each crafted to provide you with a cozy and relaxing stay
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <Eye className="w-10 h-10 mx-auto mb-2" />
                  <p className="text-sm font-medium">View Image</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-6xl w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-amber-400 transition-colors text-4xl font-light"
              >
                ×
              </button>
              <img
                src={selectedImage.url}
                alt={selectedImage.alt}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
