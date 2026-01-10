import React from "react";
import { Phone, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-amber-900/40 z-10"></div>
        <img
          src="images/slid1.jpg"
          alt="Manis Lodge"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 leading-tight text-nowrap">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent ">
              mani's lodge
            </span>
          </h1>
          <p className="text-gray-200 mb-4 font-light italic1 ">
            A warm, enjoyable, inviting atmosphere
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-3 max-w-4xl mx-auto">
            Located in the heart of Kangayam, we offer affordable and
            comfortable stay with exceptional hospitality
          </p>
          <span className="loaderx">
            man&nbsp;<small>'s</small>
          </span>
          <br />
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 mt-6">
            <a
              href="tel:+919488222044"
              className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center space-x-2"
            >
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>Book Now</span>
            </a>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300 flex items-center space-x-2"
            >
              <MapPin className="w-5 h-5" />
              <span>Get Directions</span>
            </button>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-amber-400 mb-2">24/7</div>
              <div className="text-white font-medium">Service Available</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-amber-400 mb-2">
                AC Rooms
              </div>
              <div className="text-white font-medium">Modern Amenities</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-amber-400 mb-2">
                Walking
              </div>
              <div className="text-white font-medium">From Bus Stand</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
