// AboutUs.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Shield, Clock, Users, Award, MapPin } from 'lucide-react';
import truckBg from '../assets/truck1.jpg';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO SECTION */}
      <div className="relative bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: `url(${truckBg})` }}>
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 text-white text-center py-20 px-4 sm:py-28 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4">
            Who We Are at <span className="text-blue-400">X Transport Inc.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Decades of experience in moving the heaviest and most complex freight across North America — safely, on time, every time.
          </p>
        </div>

        {/* STATS SECTION */}
        <div className="relative z-10 mt-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 backdrop-blur-md bg-white/30 rounded-xl border border-white/40 shadow-2xl mx-4">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Specialized Heavy Hauling Excellence
            </h2>
            <p className="text-base md:text-lg text-black mb-4 leading-relaxed">
              At X Transport Inc., we specialize in handling big projects and heavy hauling across Canada and the U.S.
            </p>
            <p className="text-base md:text-lg text-black leading-relaxed">
              Our fleet is equipped to handle the toughest jobs, ensuring timely delivery and minimal disruption.
            </p>
          </div>
          <div className="bg-white/90 rounded-xl shadow-xl p-6 sm:p-8">
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 sm:gap-8 text-center text-blue-800 font-semibold">
              {[
                { value: '15+', label: 'Years Experience' },
                { value: '500+', label: 'Projects Completed' },
                { value: '50+', label: 'Fleet Vehicles' },
                { value: '99%', label: 'On-Time Delivery' }
              ].map(({ value, label }, index) => (
                <div key={index}>
                  <div className="text-2xl sm:text-3xl font-bold">{value}</div>
                  <div className="text-sm mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="relative bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: `url(${truckBg})` }}>
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 text-white">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Why People Choose <span className="text-blue-400">X Transport</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
              We've built our reputation on trust, reliability, and exceptional service delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: <Truck className="w-8 h-8 text-white" />, title: "Specialized Equipment", color: "bg-blue-500", desc: "Modern fleet designed for oversized loads." },
              { icon: <Shield className="w-8 h-8 text-white" />, title: "Safety & Compliance", color: "bg-green-500", desc: "Strict safety protocols & full compliance." },
              { icon: <Clock className="w-8 h-8 text-white" />, title: "Timely Delivery", color: "bg-purple-500", desc: "Reliable scheduling and fast delivery." },
              { icon: <Users className="w-8 h-8 text-white" />, title: "Expert Team", color: "bg-orange-500", desc: "Skilled drivers & logistics specialists." },
              { icon: <Award className="w-8 h-8 text-white" />, title: "Proven Excellence", color: "bg-red-500", desc: "Trusted by hundreds of satisfied clients." },
              { icon: <MapPin className="w-8 h-8 text-white" />, title: "Wide Coverage", color: "bg-teal-500", desc: "Canada & U.S. logistics network." }
            ].map(({ icon, title, desc, color }, i) => (
              <div
                key={i}
                className="backdrop-blur-md bg-white/10 hover:bg-white/20 transition-all duration-300 p-6 rounded-xl border border-white/20 shadow-xl text-white"
              >
                <div className={`w-14 h-14 ${color} rounded-full flex items-center justify-center mb-4`}>
                  {icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
                <p className="text-sm sm:text-base text-gray-200">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CALL TO ACTION */}
      <div className="relative bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: `url(${truckBg})` }}>
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 flex items-center justify-center min-h-[50vh] px-4 sm:px-6 lg:px-8">
          <div className="backdrop-blur-md bg-white/30 border border-white/40 shadow-2xl rounded-xl max-w-3xl w-full text-center py-12 sm:py-16 px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Ready to Move Your Next Big Project?
            </h2>
            <p className="text-base sm:text-lg text-blue-100 mb-6 sm:mb-8">
              Let’s get you moving safely, efficiently, and on time.
            </p>
            <Link
              to="/quickquote"
              className="bg-white text-blue-700 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-300 inline-block"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
