import React from 'react';
import { Link } from 'react-router-dom';

import { Truck, Shield, Clock, Users, Award, MapPin } from 'lucide-react';
import truckBg from '../assets/truck1.jpg'; // Add this at the top of the file


const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
{/* Combined Hero + About Section with Shared Truck Background */}
<div
  className="relative bg-cover bg-center bg-no-repeat bg-fixed"
  style={{ backgroundImage: `url(${truckBg})` }}
>
  {/* Dark overlay only for hero text */}
  <div className="absolute inset-0 bg-black/60 z-0" />

  {/* Hero content */}
  <div className="relative z-10 text-white text-center py-28 px-4 max-w-4xl mx-auto">
    <h1 className="text-5xl md:text-6xl font-bold mb-4">
      Who We Are at <span className="text-blue-400">X Transport Inc.</span>
    </h1>
    <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
      Decades of experience in moving the heaviest and most complex freight across North America — safely, on time, every time.
    </p>
  </div>

  {/* Blur-glass stats section */}
  <div className="relative z-10 mt-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20 grid lg:grid-cols-2 gap-12 items-center backdrop-blur-md bg-white/30 rounded-xl border border-white/40 shadow-2xl mx-4">
    <div>
      <h2 className="text-4xl font-bold text-gray-900 mb-6">
        Specialized Heavy Hauling Excellence
      </h2>
      <p className="text-lg text-black mb-6 leading-relaxed">
        At X Transport Inc., we specialize in handling big projects and heavy hauling across Canada and the U.S.
      </p>
      <p className="text-lg text-black mb-8 leading-relaxed">
        Our fleet is equipped to handle the toughest jobs, ensuring timely delivery and minimal disruption.
      </p>
    </div>

    <div className="bg-white/90 rounded-xl shadow-xl p-8">
      <div className="grid grid-cols-2 gap-8 text-center text-blue-800 font-semibold">
        <div>
          <div className="text-3xl font-bold">15+</div>
          <div className="text-sm mt-1">Years Experience</div>
        </div>
        <div>
          <div className="text-3xl font-bold">500+</div>
          <div className="text-sm mt-1">Projects Completed</div>
        </div>
        <div>
          <div className="text-3xl font-bold">50+</div>
          <div className="text-sm mt-1">Fleet Vehicles</div>
        </div>
        <div>
          <div className="text-3xl font-bold">99%</div>
          <div className="text-sm mt-1">On-Time Delivery</div>
        </div>
      </div>
    </div>
  </div>

  {/* Gradient fade to white before next section
  <div className="h-32 bg-gradient-to-t from-white to-transparent w-full mt-[-2rem]" /> */}
</div>
{/* Why Choose Section */}
<div className="relative bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: `url(${truckBg})` }}>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/70 z-0" />

  <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <div className="text-center mb-16 text-white">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Why People Choose <span className="text-blue-400">X Transport</span>
      </h2>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto">
        We've built our reputation on trust, reliability, and exceptional service delivery.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          icon: <Truck className="w-8 h-8 text-white" />,
          title: "Specialized Equipment",
          color: "bg-blue-500",
          desc: "Modern fleet designed for oversized loads."
        },
        {
          icon: <Shield className="w-8 h-8 text-white" />,
          title: "Safety & Compliance",
          color: "bg-green-500",
          desc: "Strict safety protocols & full compliance."
        },
        {
          icon: <Clock className="w-8 h-8 text-white" />,
          title: "Timely Delivery",
          color: "bg-purple-500",
          desc: "Reliable scheduling and fast delivery."
        },
        {
          icon: <Users className="w-8 h-8 text-white" />,
          title: "Expert Team",
          color: "bg-orange-500",
          desc: "Skilled drivers & logistics specialists."
        },
        {
          icon: <Award className="w-8 h-8 text-white" />,
          title: "Proven Excellence",
          color: "bg-red-500",
          desc: "Trusted by hundreds of satisfied clients."
        },
        {
          icon: <MapPin className="w-8 h-8 text-white" />,
          title: "Wide Coverage",
          color: "bg-teal-500",
          desc: "Canada & U.S. logistics network."
        }
      ].map(({ icon, title, desc, color }, i) => (
        <div
          key={i}
          className="backdrop-blur-md bg-white/10 hover:bg-white/20 transition-all duration-300 p-6 rounded-xl border border-white/20 shadow-xl text-white"
        >
          <div className={`w-14 h-14 ${color} rounded-full flex items-center justify-center mb-4`}>
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-200">{desc}</p>
        </div>
      ))}
    </div>
  </div>
</div>

              {/* Call to Action */}
<div
  className="relative bg-cover bg-center bg-no-repeat bg-fixed"
  style={{ backgroundImage: `url(${truckBg})` }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/60 z-0" />

<div className="relative z-10 flex items-center justify-center min-h-[60vh] px-4 sm:px-6 lg:px-8">
  <div className="backdrop-blur-md bg-white/30 border border-white/40 shadow-2xl rounded-xl max-w-4xl w-full text-center py-16 px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
      Ready to Move Your Next Big Project?
    </h2>
    <p className="text-lg text-blue-100 mb-8">
      Let’s get you moving safely, efficiently, and on time.
    </p>
    <Link
      to="/quickquote"
      className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-300 inline-block"
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
