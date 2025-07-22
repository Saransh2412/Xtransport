import React from 'react';
import HeroSection from '../components/HeroSection';
import truck3 from '../assets/truck3.jpg';
// import TestimonialCarousel from '../components/TestimonialCarousel';

import {
  Shield, Clock, Users, Globe,
  Award, TrendingUp, Star, MapPin, CheckCircle
} from 'lucide-react';

const Home = () => {
  const whyChooseUs = [
    { icon: <Shield className="w-12 h-12" />, title: "100% Secure & Insured", description: "Full cargo insurance coverage with real-time tracking for complete peace of mind and protection" },
    { icon: <Clock className="w-12 h-12" />, title: "On-Time Delivery Guarantee", description: "98.5% on-time delivery rate with 24/7 monitoring and proactive communication throughout" },
    { icon: <Globe className="w-12 h-12" />, title: "Cross-Border Expertise", description: "Seamless Canada-USA transportation with customs clearance and compliance fully handled" },
    { icon: <Users className="w-12 h-12" />, title: "Dedicated Account Management", description: "Personal account managers providing customized solutions and priority support services" },
    { icon: <Award className="w-12 h-12" />, title: "Industry-Leading Technology", description: "Advanced logistics platform with real-time visibility and comprehensive automated reporting" },
    { icon: <TrendingUp className="w-12 h-12" />, title: "Flexible & Scalable Solutions", description: "From single shipments to complex supply chain management - we scale with your business" },
  ];

  const services = [
    { title: "Cross-Border Transportation", description: "Seamless freight movement between Canada and USA with full customs handling and documentation", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80" },
    { title: "Dry Van & Refrigerated Transportation", description: "Temperature-controlled and standard freight solutions for all cargo types with modern fleet", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80" },
    { title: "Flatbed Shipping", description: "Specialized transport for oversized, heavy, and unconventional cargo with expert handling", image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80" },
    { title: "Heavy Haul & Over Dimensional", description: "Expert handling of oversized loads with proper permits, route planning and safety protocols", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80" },
    { title: "Intermodal/Multimodal Transportation", description: "Efficient combination of rail, road, and sea transport for optimal cost savings and flexibility", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80" },
    { title: "Project Management & Logistics", description: "End-to-end supply chain management with dedicated project coordination and strategic planning", image: "https://images.unsplash.com/photo-1586528116493-a029325540fa?auto=format&fit=crop&w=800&q=80" },
  ];

  const stats = [
    { number: "612+", label: "Cross-Border Shipments Per Year" },
    { number: "10+", label: "Trusted Partner Carriers" },
    { number: "200,000#", label: "Payload Capacity" },
    { number: "98%", label: "On-Time Delivery Rate" },
  ];

  return (
    <div className="bg-[#1d1a19] text-white">
      <HeroSection />

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Why Companies Choose X Transport Inc.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="p-6 sm:p-8 bg-white rounded-lg shadow-md border hover:border-blue-300 transition">
                <div className="text-blue-600 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 text-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Our Transportation Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <a
                key={index}
                href="/services"
                className="group bg-white rounded-lg shadow hover:shadow-xl transition transform hover:scale-105 overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-blue-900/30"></div>
                  <h3 className="absolute bottom-4 left-4 text-white text-lg sm:text-xl font-bold">
                    {service.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <span className="text-blue-600 font-medium hover:underline">Learn More →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section
        className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center"
        style={{ backgroundImage: `url(${truck3})` }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-300 font-semibold text-sm uppercase tracking-wide">
                Career Opportunities
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2 mb-6">
                Our Transport Team & Fleet
              </h2>
              <p className="text-lg sm:text-xl text-blue-100 leading-relaxed mb-8">
                XTransport operates a robust fleet... flexible routing to meet the demands of any project or lane.
              </p>
              {/* <a href="/Carriers" className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition-colors duration-300 mb-6">
                BECOME A PARTNER CARRIER
              </a> */}
              <p className="text-blue-100 leading-relaxed mb-8 text-base sm:text-lg">
                Our extended team includes over 50 full-time staff... heavy haul and general freight logistics.
              </p>
              <a href="/Carriers" className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition-colors duration-300">
                JOIN OUR TEAM
              </a>
            </div>

            {/* Right Box */}
            <div className="lg:pl-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Career Opportunities</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  {[
                    ["Professional Drivers", "CDL holders with clean records"],
                    ["Logistics Coordinators", "Supply chain professionals"],
                    ["Operations Team", "Dispatch and planning roles"],
                    ["Management", "Leadership opportunities"],
                  ].map(([title, desc], idx) => (
                    <div key={idx}>
                      <h4 className="font-semibold text-blue-300 mb-2">{title}</h4>
                      <p className="text-sm text-blue-100">{desc}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {[
                    "Competitive salary & comprehensive benefits",
                    "Modern equipment & cutting-edge technology",
                    "Work-life balance focus & flexible scheduling",
                    "Career advancement & growth opportunities",
                    "Comprehensive training & development programs",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start text-blue-100">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-12 bg-white"></div>

      {/* Statistics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/80 to-blue-800/80">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">{stat.number}</div>
              <div className="text-sm md:text-base text-blue-100 font-medium uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials
      <TestimonialCarousel /> */}

      {/* Map */}
      <section className="relative h-[500px] w-full">
        <iframe
          title="XTransport USA & Canada Service Area"
          src="https://www.google.com/maps/embed?pb=..."
          className="absolute inset-0 w-full h-full border-0"
          allowFullScreen
          loading="lazy"
        ></iframe>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center bg-black/30">
          <svg className="w-16 h-16 mb-4 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4.5 8-10c0-4.418-3.582-8-8-8s-8 3.582-8 8c0 5.5 8 10 8 10z" />
          </svg>
          <h3 className="text-2xl font-bold mb-2">Our Service Areas</h3>
          <p className="text-gray-200">Covering entire USA & Canada with trusted logistics</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
