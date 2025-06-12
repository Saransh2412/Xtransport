import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#1d1a19] text-white px-6 py-3 flex flex-col lg:flex-row lg:items-center lg:justify-between shadow-md">
      
      {/* Top: Brand + Navigation + Button */}
      <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between space-y-3 lg:space-y-0">
        
        {/* Left: Brand Name (Home Link) */}
        <a href="/" className="text-2xl font-bold tracking-wider text-red-500 hover:text-red-400 transition-colors">
          Xtransport
        </a>

        {/* Center: Navigation Links */}
        <div className="flex justify-center lg:justify-center space-x-8 text-sm font-semibold">
          <a href="#services" className="hover:text-red-500 transition-colors">Services</a>
          <a href="#carriers" className="hover:text-red-500 transition-colors">Carriers</a>
          <a href="#company" className="hover:text-red-500 transition-colors">Company</a>
          <a href="#contact" className="hover:text-red-500 transition-colors">Contact</a>
        </div>

        {/* Right: Quick Quote Button */}
        <div className="flex justify-center lg:justify-end">
          <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-white font-semibold text-sm transition-all">
            Quick Quote
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
