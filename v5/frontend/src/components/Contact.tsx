import React from "react";
import { MapPin, Phone, Mail, Facebook, PhoneIcon, PhoneCall } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in <span className="text-amber-600">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find our location on the map, reach out via our address, or connect
            with us through social media
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7088.36952286098!2d77.56084135569581!3d11.004700587040434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9a1fd1874da73%3A0x9f79486abd0f87ea!2sMANIS%20Lodge!5e1!3m2!1sen!2sin!4v1767853238973!5m2!1sen!2sin" 
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Manis Lodge Location"
            ></iframe>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Address Card */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Address
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    MANIS Lodge, 14/44, Nidharshanaa Complex,
                    <br />
                    Kamarajar Street (Opp BusStand),
                    <br />
                    Kangayam 638701, Tamil Nadu
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Phone
                  </h3>
                  <div className="space-y-2">
                    <a
                      href="tel:+914257222044"
                      className="block text-gray-700 hover:text-amber-600 transition-colors font-medium"
                    >
                      Telephone: +91 04257 222044
                    </a>
                    <a
                      href="tel:+919488222044"
                      className="block text-gray-700 hover:text-amber-600 transition-colors font-medium"
                    >
                      Mobile: +91 9488 222044
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Card */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Facebook className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Connect With Us
                  </h3>
                  <a
                    href="https://www.facebook.com/manislodge"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors font-medium"
                  >
                    <Facebook className="w-5 h-5" />
                    <span>Follow us on Facebook</span>
                  </a>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-3">
                <PhoneCall></PhoneCall> Ready to Book Your Stay?
              </h3>
              <p className="mb-6 opacity-90">
                Call us now for reservations and special offers!
              </p>
              <a
                href="tel:+919488222044"
                className="inline-block bg-white text-amber-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Call Now: +91 9488 222044
              </a> 
              <a
                href="tel:+9104257222044"
                className="inline-block bg-white text-amber-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg ms-2 mt-3"
              >
                Call Now: +91 04257 222044
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
