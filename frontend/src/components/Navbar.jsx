import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Optional: Install lucide-react if not already

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#1d1a19] text-white px-6 py-3 shadow-md">
      <div className="flex items-center justify-between lg:justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-wider text-blue-500 hover:text-blue-400 transition-colors"
        >
          Xtransport
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Nav Links + Button */}
        <div className="hidden lg:flex items-center space-x-10">
          <div className="flex space-x-8 text-sm font-semibold">
            <Link to="/" className="hover:text-blue-500 transition-colors">Home</Link>
            <Link to="/services" className="hover:text-blue-500 transition-colors">Services</Link>
            <Link to="/carriers" className="hover:text-blue-500 transition-colors">Carriers</Link>
            <Link to="/aboutus" className="hover:text-blue-500 transition-colors">About Us</Link>
            <Link to="/contact" className="hover:text-blue-500 transition-colors">Contact</Link>
          </div>
          <Link to="/quickquote">
            <button className="bg-white text-blue-700 px-6 py-2 rounded-lg font-semibold hover:bg-blue-100 transition duration-300">
              Get a Quote
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col items-start mt-4 space-y-4 lg:hidden text-sm font-semibold">
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-500 transition-colors">Home</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)} className="hover:text-blue-500 transition-colors">Services</Link>
          <Link to="/carriers" onClick={() => setMenuOpen(false)} className="hover:text-blue-500 transition-colors">Carriers</Link>
          <Link to="/aboutus" onClick={() => setMenuOpen(false)} className="hover:text-blue-500 transition-colors">About Us</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-500 transition-colors">Contact</Link>
          <Link to="/quickquote" onClick={() => setMenuOpen(false)}>
            <button className="bg-white text-blue-700 px-6 py-2 rounded-lg font-semibold hover:bg-blue-100 transition duration-300 w-full text-left">
              Get a Quote
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
