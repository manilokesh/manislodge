import React from 'react';
import { Award, Users, Heart, Shield } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-amber-50/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-amber-600">Mani's Lodge</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto italic">
            An extreme service & satisfaction for the customers
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16 ">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="images/slid1.jpg"
                alt="Manis Lodge Reception"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-lg px-6 py-4 shadow-lg">
                <div className="text-3xl font-bold text-amber-600">2016</div>
                <div className="text-sm text-gray-600 font-medium">Established</div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              What We Do & Who We Are
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Mani's Lodge was started in the year of <strong>2016</strong> with a vision of giving extreme service and satisfaction to our customers. Every aspect of your safety, security, and comfort has been taken into consideration while designing the rooms and facilities.
              </p>
              <p>
                As we dedicated ourselves completely for our customer's service and satisfaction, we listen closely to our guest's feedbacks and feel free to upgrade our services, facilities & infrastructure to keep pace with their changing needs.
              </p>
              <p>
                The warmth of our <strong>Royal South Indian Hospitality</strong> is a trait that comes to us naturally and will be evident from our style of service. Courteous, Attentive, Non-intrusive.
              </p>
              <p className="text-lg font-semibold text-amber-700">
                Come, experience our hospitality, and take home the joyful memories of a lifetime!
              </p>
            </div>
          </div>
        </div>

        {/* Features Cards */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-amber-100">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-amber-600" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Hospitality</h4>
            <p className="text-gray-600 text-sm">
              The warmth of Royal South Indian Hospitality with courteous and attentive service
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-amber-100">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-amber-600" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Room & Amenities</h4>
            <p className="text-gray-600 text-sm">
              Elegantly furnished and well equipped A/C rooms with attached bath & European style toilet
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-amber-100">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-amber-600" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Our Special</h4>
            <p className="text-gray-600 text-sm">
              Very spacious, ventilated rooms which makes you feel that you are in heaven
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-amber-100">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-amber-600" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Safety First</h4>
            <p className="text-gray-600 text-sm">
              24 hours CCTV surveillance and power backup for your complete safety and comfort
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
