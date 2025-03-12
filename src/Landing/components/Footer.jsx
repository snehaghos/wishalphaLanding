import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (

  <footer className="w-full bg-gray-800 py-10">
  <div className="max-w-6xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      <div>
        <h3 className="text-xl font-bold text-purple-400 mb-4">About WishAlpha</h3>
        <p className="text-gray-300">
          WishAlpha is your go-to platform for instant gaming fun. Explore a wide variety of games and join our growing community.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-bold text-purple-400 mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li><Link to="/" className="text-gray-300 hover:text-purple-400 transition-colors">Home</Link></li>
          <li><Link to="/games" className="text-gray-300 hover:text-purple-400 transition-colors">Games</Link></li>
          <li><Link to="/about" className="text-gray-300 hover:text-purple-400 transition-colors">About Us</Link></li>
          <li><Link to="/contact" className="text-gray-300 hover:text-purple-400 transition-colors">Contact Us</Link></li>
          <li><Link to="/support" className="text-gray-300 hover:text-purple-400 transition-colors">Support Us</Link></li>
          <li><Link to="/blog" className="text-gray-300 hover:text-purple-400 transition-colors">Blog</Link></li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-bold text-purple-400 mb-4">Contact Us</h3>
        <p className="text-gray-300">Email: support@WishAlpha.com</p>
        <p className="text-gray-300">Phone: +1 (123) 456-7890</p>
        <p className="text-gray-300">Address: 123 Gaming Street, Game City, World</p>
      </div>
    </div>


    <div className="mt-10 border-t border-gray-700 pt-6 text-center">
      <p className="text-gray-300">&copy; 2023 WishAlpha. All rights reserved.</p>
    </div>
  </div>
</footer>  )
}

export default Footer