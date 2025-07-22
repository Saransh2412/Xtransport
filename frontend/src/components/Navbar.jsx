import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logoXTransport.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#1d1a19] text-white shadow-md">
      <div className="flex items-center justify-between h-16 px-4">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center h-full py-1">
          <img
            src={logo}
            alt="Xtransport Logo"
            className="h-full object-contain"
          />
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Nav Links + Button */}
        <div className="hidden lg:flex items-center space-x-6">
          <div className="flex space-x-4 text-sm font-semibold">
            <Link to="/" className="hover:text-blue-500 transition-colors px-2">Home</Link>
            <Link to="/services" className="hover:text-blue-500 transition-colors px-2">Services</Link>
            <Link to="/carriers" className="hover:text-blue-500 transition-colors px-2">Carriers</Link>
            <Link to="/aboutus" className="hover:text-blue-500 transition-colors px-2">About Us</Link>
            <Link to="/contact" className="hover:text-blue-500 transition-colors px-2">Contact</Link>
          </div>
          <Link to="/quickquote">
            <button className="bg-white text-blue-700 px-4 py-1.5 rounded-lg font-semibold hover:bg-blue-100 transition duration-300">
              Get a Quote
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col items-start mt-4 space-y-4 lg:hidden text-sm font-semibold px-4 pb-4">
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-500 transition-colors">Home</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)} className="hover:text-blue-500 transition-colors">Services</Link>
          <Link to="/carriers" onClick={() => setMenuOpen(false)} className="hover:text-blue-500 transition-colors">Carriers</Link>
          <Link to="/aboutus" onClick={() => setMenuOpen(false)} className="hover:text-blue-500 transition-colors">About Us</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-500 transition-colors">Contact</Link>
          <Link to="/quickquote" onClick={() => setMenuOpen(false)}>
            <button className="bg-white text-blue-700 px-4 py-2 rounded-lg font-semibold hover:bg-blue-100 transition duration-300 w-full text-left">
              Get a Quote
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
