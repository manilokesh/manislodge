import React from 'react';
import { ExternalLink } from 'lucide-react';

const Attractions = () => {
  const attractions = [
    {
      title: 'Kangayam',
      image: '/images/b2.jpg',
      description: 'Kangeyam is a second grade municipality in Kangeyam taluk of Tirupur district in the Indian state of Tamil Nadu. It is situated at the heart of Tirupur district',
      link: 'http://www.facebook.com/kangayam638701',
      linkText: 'More on Social'
    },
    {
      title: 'Sivanmalai',
      image: '/images/b3.jpg',
      description: 'It is an ancient sapphire yielding site. A beautiful Temple dedicated to Lord Muruga near Kangeyam',
      link: 'https://sivanmalaimurugan.hrce.tn.gov.in/',
      linkText: 'Devastanam Site'
    },
    {
      title: 'Kangayam Kaalai',
      image: '/images/b1.jpg',
      description: 'The Kangeyam bull is a cattle breed that is indigenous to the area around Kangeyam. There are three varieties of Kangeyam cattle "Kaari", "Mayilai" and "Sevalai".',
      link: 'http://www.kangayambull.org/',
      linkText: 'More on Research foundation'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Discover the Charm <span className="text-amber-600">Around Us</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the hidden gems and popular attractions near our location, along with some special spots that make your stay even more memorable
          </p>
        </div>

        {/* Attractions Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {attractions.map((attraction, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={attraction.image}
                  alt={attraction.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                  {attraction.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {attraction.description}
                </p>
                <a
                  href={attraction.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-amber-600 hover:text-amber-700 font-semibold transition-colors group"
                >
                  <span>{attraction.linkText}</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Attractions;
