import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Gamepad2, Menu, X } from "lucide-react"

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="border-b border-gray-800 bg-gray-950/95 backdrop-blur sticky top-0 z-50"
    >
      <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2 group">
          <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
            <Gamepad2 className="h-8 w-8 text-purple-500" />
          </motion.div>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            WishAlpha
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {["Games", "Tournaments", "Community", "Support"].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <a
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-all duration-300 relative group font-medium"
              >
                {item}
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </a>
            </motion.div>
          ))}
        </nav>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="hidden md:flex items-center space-x-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 font-medium"
          >
            Sign In
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(168, 85, 247, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg font-medium transition-all duration-300"
          >
            Get Started
          </motion.button>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-gray-800 bg-gray-950 overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4 space-y-4">
              {["Games", "Tournaments", "Community", "Support"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="block text-gray-300 hover:text-white transition-colors duration-300 font-medium"
                  >
                    {item}
                  </a>
                </motion.div>
              ))}
              <div className="pt-4 space-y-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="w-full text-left px-4 py-2 text-gray-300 hover:text-white font-medium"
                >
                  Sign In
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium"
                >
                  Get Started
                </motion.button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header