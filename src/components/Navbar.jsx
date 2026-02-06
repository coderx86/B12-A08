import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Apps', path: '/apps' },
    { name: 'Installation', path: '/installation' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between relative">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
           <img src={logo} alt="Hero.io" className="h-8 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 ${
                  isActive ? 'text-[#6B50F6] font-bold' : 'text-gray-600 hover:text-[#6B50F6]'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-4">
            {/* Contribute Button */}
            <a
                href="https://github.com/coderx86/B12-A08"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 bg-[#6B50F6] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#6B50F6]/90 transition-all shadow-md hover:shadow-lg"
            >
                <FaGithub className="text-lg" />
                <span>Contribute</span>
            </a>

            {/* Hamburger Icon */}
            <div className="md:hidden flex items-center">
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)} 
                  className="text-gray-600 focus:outline-none hover:text-[#6B50F6] transition-colors"
                >
                  {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 flex flex-col px-4 py-4 space-y-4 shadow-lg">
            {navLinks.map((link) => (
                <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                        `block text-base font-medium transition-colors duration-200 ${
                            isActive ? 'text-[#6B50F6] font-bold' : 'text-gray-600 hover:text-[#6B50F6]'
                        }`
                    }
                >
                    {link.name}
                </NavLink>
            ))}
             {/* Contribute Button */}
             <a
                  href="https://github.com/coderx86/B12-A08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#6B50F6] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#6B50F6]/90 transition-all shadow-md hover:shadow-lg w-full"
                >
                  <FaGithub className="text-lg" />
                  <span>Contribute</span>
             </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
