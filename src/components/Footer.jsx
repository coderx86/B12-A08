
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import logo from '../assets/logo.png'; 

const Footer = () => {
  return (
    <footer className="bg-[#0B1120] text-gray-300 py-12 mt-auto">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
               <img src={logo} alt="Hero.io" className="h-8 w-auto" />
               <span className="text-xl font-bold text-white">Hero.io</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Your ultimate destination for discovering the best apps. From productivity tools to addictive games, we have it all.
            </p>
          </div>

          {/* Discover */}
          <div>
            <h3 className="text-white font-semibold mb-4">Discover</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#6B50F6] transition-colors">Top Rated</a></li>
              <li><a href="#" className="hover:text-[#6B50F6] transition-colors">New Releases</a></li>
              <li><a href="#" className="hover:text-[#6B50F6] transition-colors">Editors' Choice</a></li>
              <li><a href="#" className="hover:text-[#6B50F6] transition-colors">Categories</a></li>
            </ul>
          </div>

          {/* For Developers */}
          <div>
            <h3 className="text-white font-semibold mb-4">For Developers</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#6B50F6] transition-colors">Submit App</a></li>
              <li><a href="#" className="hover:text-[#6B50F6] transition-colors">Developer Guidelines</a></li>
              <li><a href="#" className="hover:text-[#6B50F6] transition-colors">Advertising</a></li>
              <li><a href="#" className="hover:text-[#6B50F6] transition-colors">Console</a></li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal & Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#6B50F6] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#6B50F6] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#6B50F6] transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-[#6B50F6] transition-colors">Help Center</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Social & Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500">
              <p>Copyright © {new Date().getFullYear()} - All right reserved by Hero.io Industries</p>
            </div>
            
            <div className="flex space-x-4">
                <SocialLink icon={<FaTwitter />} href="#" />
                <SocialLink icon={<FaLinkedinIn />} href="#" />
                <SocialLink icon={<FaFacebookF />} href="#" />
                <SocialLink icon={<FaInstagram />} href="#" />
            </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ icon, href }) => (
  <a 
    href={href} 
    className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#6B50F6] hover:text-white transition-all duration-300"
  >
    {icon}
  </a>
);

export default Footer;
