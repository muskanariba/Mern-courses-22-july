import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import navbarimg from '../user/navbarimg.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-yellow-500">
          CoursePlatform
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-base font-medium items-center">
          <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
          <Link to="/courses" className="hover:text-yellow-400 transition">Courses</Link>
          <Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link>
          <Link to="/login" className="hover:text-yellow-400 transition">Login</Link>
          
          {/* Cart Icon */}
          <Link to="/cart" className="ml-2">
            <img
              src= {navbarimg}
              alt="Cart"
              className="w-6 h-6"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-4 px-4 text-base font-medium">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-yellow-400 transition">Home</Link>
          <Link to="/courses" onClick={() => setIsOpen(false)} className="hover:text-yellow-400 transition">Courses</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-yellow-400 transition">Contact</Link>
          <Link to="/login" onClick={() => setIsOpen(false)} className="hover:text-yellow-400 transition">Login</Link>
          <Link to="/cart" onClick={() => setIsOpen(false)} className="hover:text-yellow-400 transition flex items-center gap-2">
            <img
             src= {navbarimg}
              alt="Cart"
              className="w-5 h-5"
            />
            Cart
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
