import React from 'react';
import { 
  Snowflake, Bed, Car, Clock, Coffee, Hospital, 
  MapPin, ParkingCircle, Tv, Droplets, Shield, 
  Zap, Wind, GlassWater 
} from 'lucide-react';

const Features = () => {
  const features = [
    { icon: Snowflake, title: 'A/C', description: 'All A/C rooms' },
    { icon: Bed, title: 'Rooms', description: 'All Double bed rooms' },
    { icon: Car, title: 'Assistance', description: 'Travel Assistance' },
    { icon: Clock, title: 'Check out', description: '24 hours check out' },
    { icon: Coffee, title: 'Service', description: '24 hours room service' },
    { icon: Hospital, title: 'Emergency', description: 'Next to Hospitals' },
    { icon: MapPin, title: 'Location', description: 'Walkable from BusStand' },
    { icon: ParkingCircle, title: 'Parking', description: 'Wide, Spacious Car Parking' },
    { icon: Tv, title: 'TV', description: 'LED TV with Satellite Channels' },
    { icon: Droplets, title: 'Water', description: 'Running Hot & Cold Water' },
    { icon: Shield, title: 'Security', description: '24 hours CCTV surveillance' },
    { icon: Zap, title: 'Power', description: '24 hours Power Backup Service' },
    { icon: Wind, title: 'Surrounding', description: 'Air circulated atmosphere' },
    { icon: GlassWater, title: 'Water', description: 'Purified RO water for drinking' },
  ];

  return (
    <section id="amenities" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-amber-600">Amenities</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience comfort and convenience with our comprehensive range of facilities designed for your perfect stay
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-amber-50/50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-amber-100/50 flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12 border border-amber-200">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-2xl font-bold text-amber-700 mb-2">Elegant Furnishing</h4>
              <p className="text-gray-700">Tastefully designed rooms with modern decor</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-amber-700 mb-2">Spacious Parking</h4>
              <p className="text-gray-700">Ample parking space for all vehicles</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-amber-700 mb-2">24 Hours Service</h4>
              <p className="text-gray-700">Round-the-clock assistance for your needs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
