import React from 'react';
import { CiYoutube } from 'react-icons/ci';
import { FaFacebookF, FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-cyan-50 text-cyan-900 rounded-t-xl shadow-inner mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row md:justify-between md:items-center gap-6">
        
        
        <nav className="flex flex-col sm:flex-row gap-4 text-center md:text-left">
          <Link className="hover:text-cyan-600 transition-colors">About Us</Link>
          <Link className="hover:text-cyan-600 transition-colors">Contact</Link>
          <Link className="hover:text-cyan-600 transition-colors">Career</Link>
        </nav>

        
        <div className="flex justify-center md:justify-start gap-4 text-xl text-cyan-700">
          <Link  className="hover:text-cyan-500 transition-colors"><FaXTwitter /></Link>
          <Link  className="hover:text-cyan-500 transition-colors"><CiYoutube /></Link>
          <Link  className="hover:text-cyan-500 transition-colors"><FaFacebookF /></Link>
        </div>

      </div>

     
      <div className="border-t border-cyan-100 mt-4 pt-4 text-center text-sm text-cyan-700">
        © {new Date().getFullYear()} Book Heaven Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
