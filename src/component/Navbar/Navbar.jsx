import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4 flex justify-between items-center shadow-lg">
        <h1 className="text-white text-2xl font-bold"><img src="/images/logo.png" width={105} height={90} alt="" /></h1>
        <div className="flex space-x-6">
          <Link to="/" className="text-white hover:text-purple-400 transition-colors">Home</Link>
          <Link to="/games" className="text-white hover:text-purple-400 transition-colors">Games</Link>
          <Link to="/about" className="text-white hover:text-purple-400 transition-colors">About Us</Link>
          <Link to="/contact" className="text-white hover:text-purple-400 transition-colors">Contact Us</Link>
          <Link to="/support" className="text-white hover:text-purple-400 transition-colors">Support Us</Link>
          <Link to="/blog" className="text-white hover:text-purple-400 transition-colors">Blog</Link>
        </div>
      </nav>
    )
}

export default Navbar