import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/games", label: "Games" },
    { path: "/team", label: "Team" },
    { path: "/about-us", label: "About Us" },
    { path: "/contact-us", label: "Contact Us" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div
        className="flex justify-between items-center  mx-auto px-4 py-3
        backdrop-blur-md bg-white/10 border-b border-white/20 shadow-lg "
      >
     
        <Link to="/" className="flex items-center">
          <img
            src="/images/logo.png"
            width={105}
            height={90}
            alt="Logo"
            className="hover:scale-105 transition-transform duration-200"
          />
        </Link>

        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-white font-medium hover:text-purple-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden mx-4 mt-2 rounded-xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg space-y-3 px-6 py-4"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block text-white font-medium hover:text-purple-400 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
