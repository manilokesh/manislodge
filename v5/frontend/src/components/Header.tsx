import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2"> 
            <img src="images/logo1.png" alt="" className='invert ' style={{width: "70px", marginRight:"10px"}}></img>
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
              mani<small>'s</small> lodge 
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
              About
            </button>
            <button onClick={() => scrollToSection('amenities')} className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
              Amenities
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
              Gallery
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
              Contact
            </button>
          </nav>

          {/* Phone Numbers */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+919488222044" className="flex items-center space-x-2 text-gray-700 hover:text-amber-600 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-semibold">+91 9488 222044</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-amber-600 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-amber-600 transition-colors font-medium text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-amber-600 transition-colors font-medium text-left">
                About
              </button>
              <button onClick={() => scrollToSection('amenities')} className="text-gray-700 hover:text-amber-600 transition-colors font-medium text-left">
                Amenities
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-amber-600 transition-colors font-medium text-left">
                Gallery
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-amber-600 transition-colors font-medium text-left">
                Contact
              </button>
              <a href="tel:+919488222044" className="flex items-center space-x-2 text-amber-600 font-semibold pt-2">
                <Phone className="w-4 h-4" />
                <span>+91 9488 222044</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
