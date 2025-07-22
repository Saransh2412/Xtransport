import React from "react";
import { Truck, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">

          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Truck className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold">X Transport Inc.</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for heavy hauling and oversized transportation across Canada and the United States. We specialize in handling big projects with safety, reliability, and efficiency.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors" onClick={scrollToTop}>Home</Link></li>
              <li><Link to="/aboutus" className="text-gray-300 hover:text-white transition-colors" onClick={scrollToTop}>About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors" onClick={scrollToTop}>Services</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors" onClick={scrollToTop}>Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm sm:text-base">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-400 mr-3 mt-0.5" />
                <div className="text-gray-300">
                  <p>236 Willowmere Way</p>
                  <p>Chestermere, AB T1X 0e1</p>
                  <p>Canada</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-blue-400 mr-3" />
                <span className="text-gray-300">368-599-9677</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-400 mr-3" />
                <span className="text-gray-300">info@xtransport.ca</span>
              </div>
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-blue-400 mr-3 mt-0.5" />
                <div>
                  <p className="text-gray-300">24/7 Emergency Service</p>
                  <p className="text-gray-400 text-xs">Mon-Fri: 8AM–6PM</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 text-center sm:text-left">
          <div className="text-gray-400 text-sm">
            © 2025 X Transport Inc. All rights reserved.
          </div>
          {/* Future Links or Admin button placeholder */}
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            {/* Reserved for future links or buttons */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
