import React from 'react';
import { Truck, Shield, Clock, Users, Award, MapPin } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              About <span className="text-blue-400">X Transport Inc.</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Your trusted partner for heavy hauling and oversized transportation across North America
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Specialized Heavy Hauling Excellence
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At X Transport Inc., we specialize in handling big projects and heavy hauling across Canada and the U.S. With years of experience in the industry, we provide reliable, efficient, and safe transportation services for oversized loads and complex logistics needs.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our fleet is equipped to handle the toughest jobs, ensuring timely delivery and minimal disruption to your operations. Whether it's construction materials, machinery, or specialized equipment, X Transport Inc. is your trusted partner for all your heavy hauling and transport needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-blue-100 px-4 py-2 rounded-full">
                <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-blue-800 font-medium">Canada & U.S. Coverage</span>
              </div>
              <div className="flex items-center bg-green-100 px-4 py-2 rounded-full">
                <Shield className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-green-800 font-medium">Safety First</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">15+</div>
                  <div className="text-blue-100">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-blue-100">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">50+</div>
                  <div className="text-blue-100">Fleet Vehicles</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">99%</div>
                  <div className="text-blue-100">On-Time Delivery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose X Transport Section with Background */}
      <div className="relative bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-cover bg-center" style={{
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><pattern id="truck-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse"><path d="M10 50h20v10h10v-20h20v-10h-20v-10h-10v10h-20z" fill="white" opacity="0.1"/></pattern></defs><rect width="1000" height="1000" fill="url(%23truck-pattern)"/></svg>')`
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why People Choose <span className="text-blue-400">X Transport</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We've built our reputation on trust, reliability, and exceptional service delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 hover:bg-opacity-20 transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Specialized Equipment</h3>
              <p className="text-gray-300 leading-relaxed">
                Our modern fleet is specifically designed for heavy hauling and oversized loads, ensuring safe and efficient transportation for even the most challenging cargo.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 hover:bg-opacity-20 transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Safety & Compliance</h3>
              <p className="text-gray-300 leading-relaxed">
                We maintain the highest safety standards and full regulatory compliance across all jurisdictions, giving you peace of mind with every shipment.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 hover:bg-opacity-20 transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Timely Delivery</h3>
              <p className="text-gray-300 leading-relaxed">
                Our proven track record of on-time deliveries ensures your projects stay on schedule, minimizing costly delays and disruptions.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 hover:bg-opacity-20 transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Expert Team</h3>
              <p className="text-gray-300 leading-relaxed">
                Our experienced drivers and logistics specialists bring decades of combined expertise to handle your most complex transportation challenges.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 hover:bg-opacity-20 transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Proven Excellence</h3>
              <p className="text-gray-300 leading-relaxed">
                With hundreds of successful projects and satisfied clients, we've established ourselves as leaders in the heavy hauling industry.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 hover:bg-opacity-20 transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-teal-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Wide Coverage</h3>
              <p className="text-gray-300 leading-relaxed">
                Serving both Canada and the United States, we provide comprehensive coverage for your transportation needs across North America.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Move Your Next Big Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today to discuss your heavy hauling and transportation needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              Get Quote
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;