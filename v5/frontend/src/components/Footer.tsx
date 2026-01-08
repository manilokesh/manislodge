import React from "react";
import { Phone, MapPin, Facebook, Mail, MapPinHouse } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Column */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Mani's Lodge
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Experience the warmth of South Indian hospitality in the heart of
              Kangayam. Comfortable rooms, modern amenities, and exceptional
              service since 2016.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/manislodge"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://goo.gl/maps/JQjAam87NKx"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors"
              >
                <MapPinHouse className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-amber-400">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("amenities")}
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Amenities
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-amber-400">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  14/44, Nidharshanaa Complex,
                  <br />
                  Kamarajar Street, Kangayam 638701
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <a
                  href="tel:+919488222044"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  +91 9488 222044
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <a
                  href="tel:+914257222044"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  +91 04257 222044
                </a>
              </li>
            </ul>
          </div>

          {/* Our Amenities */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-amber-400">
              Key Features
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>✓ All AC Rooms</li>
              <li>✓ 24/7 Service</li>
              <li>✓ Free Parking</li>
              <li>✓ LED TV & Satellite</li>
              <li>✓ Hot & Cold Water</li>
              <li>✓ CCTV Surveillance</li>
              <li>✓ Power Backup</li>
              <li>✓ Near Bus Stand</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Mani's Lodge. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm text-center md:text-right">
              Your comfort, Our priority | Best Budget Lodge in Kangayam
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
