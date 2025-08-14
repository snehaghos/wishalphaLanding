import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-gray-300 py-6">
      <div className="max-w-[1240px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-4">
       
        <div>
          <h3 className="text-xl font-bold text-purple-400 mb-4">About WishAlpha</h3>
          <p className="text-gray-400 leading-relaxed">
            WishAlpha is your go-to platform for instant gaming fun. Explore a wide variety of games and join our growing community.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-purple-400 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {[ 'Games', 'About Us', 'Contact Us', 'Support Us', 'Blog'].map((item) => (
              <li key={item}>
                <Link to={`/${item.toLowerCase().replace(/ /g, '-')}`} className="hover:text-purple-400 transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-purple-400 mb-4">Join Us</h3>
          <ul className="space-y-2">
            <li>
              <Link to="https://developer.wishalpha.com" className="text-gray-400 hover:text-purple-400 transition-colors underline">
                WishAlpha for Developers
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-purple-400 mb-4">Contact Us</h3>
          <div className="flex flex-col md:flex-row justify-between gap-2">
        
            <div className="flex-1">
              <p>Email: <a href="mailto:wishalpha25@gmail.com" className="hover:text-purple-400 underline">wishalpha25@gmail.com</a></p>
              <p>Phone: <a href="tel:8240707689" className="hover:text-purple-400">8240707689</a></p>
              <p>Address: Wish Study Center, Panditbattala, Hatiara Bypass Road, Kolkata-700157</p>
            </div>

          </div>
        </div>
      </div>


      <div className="flex justify-center gap-6 mt-10">
        {[FaFacebook, FaTwitter, FaInstagram, FaWhatsapp].map((Icon, index) => (
          <a key={index} href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-2xl">
            <Icon />
          </a>
        ))}
      </div>

      <div className="mt-8 border-t border-gray-700 pt-6 text-center">
        <p>&copy; {new Date().getFullYear()} WishAlpha. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
