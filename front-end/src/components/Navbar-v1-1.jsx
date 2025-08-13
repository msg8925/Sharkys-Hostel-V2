// src/components/Navbar.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for mobile menu toggle

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-600">MyHostel</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-700 hover:text-indigo-600 transition">
            Home
          </a>
          <a href="/rooms" className="text-gray-700 hover:text-indigo-600 transition">
            Rooms
          </a>
          <a href="/booking" className="text-gray-700 hover:text-indigo-600 transition">
            Booking
          </a>
          <a href="/contact" className="text-gray-700 hover:text-indigo-600 transition">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <a
            href="/"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="/rooms"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setMenuOpen(false)}
          >
            Rooms
          </a>
          <a
            href="/booking"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setMenuOpen(false)}
          >
            Booking
          </a>
          <a
            href="/contact"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
