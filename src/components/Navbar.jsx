import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#1d1a19] text-white px-6 py-3 flex flex-col lg:flex-row lg:items-center lg:justify-between shadow-md">
      <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between space-y-3 lg:space-y-0">
        
        {/* Brand Logo Link to Home */}
        <Link to="/" className="text-2xl font-bold tracking-wider text-blue-500 hover:text-blue-400 transition-colors">
          Xtransport
        </Link>

        {/* Center Navigation */}
        <div className="flex justify-center lg:justify-center space-x-8 text-sm font-semibold">
          <Link to="/" className="hover:text-blue-500 transition-colors">Home</Link>
          <Link to="/services" className="hover:text-blue-500 transition-colors">Services</Link>
          <Link to="/carriers" className="hover:text-blue-500 transition-colors">Carriers</Link>
          <Link to="/aboutus" className="hover:text-blue-500 transition-colors">About Us</Link>
          <Link to="/contact" className="hover:text-blue-500 transition-colors">Contact</Link>


        </div>

        {/* Right Button */}
        <div className="flex justify-center lg:justify-end">
<Link to="/quickquote">
  <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-300">
    Get a Quote
  </button>
</Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
