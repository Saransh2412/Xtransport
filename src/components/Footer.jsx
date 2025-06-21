import React from "react";
import { Truck, MapPin, Phone, Mail, Clock, Shield } from "lucide-react";


import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Truck className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold">X Transport Inc.</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for heavy hauling and oversized transportation across Canada and the United States. We specialize in handling big projects with safety, reliability, and efficiency.
            </p>
            <div className="flex space-x-4">
              {/* Twitter */}
              <a href="#" aria-label="Twitter" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883...z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77...z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554...z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/aboutus" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/fleet" className="text-gray-300 hover:text-white transition-colors">Fleet</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-400 mr-3 mt-0.5" />
                <div className="text-gray-300">
                  <p>123 Transport Way</p>
                  <p>Toronto, ON M5V 3A8</p>
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
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 X Transport Inc. All rights reserved.
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <div className="flex space-x-4 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</Link>
            </div>
           <Link to="/admin">
      <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center mt-2 md:mt-0">
        <Shield />
        Admin
      </button>
    </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
