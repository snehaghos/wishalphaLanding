import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Dummy data for sections
const featuredGames = [
  { id: 1, title: "Action Game", image: "/images/action.jpg" },
  { id: 2, title: "Puzzle Game", image: "/images/puzzle.jpg" },
  { id: 3, title: "Racing Game", image: "/images/racing.jpg" },
];

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Indie Developer",
    comment: "WishAlpha helped me reach millions of players. Highly recommended!",
    image: "/images/user1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Game Designer",
    comment: "The platform is easy to use, and the support team is amazing.",
    image: "/images/user2.jpg",
  },
];

const pricingPlans = [
  {
    id: 1,
    title: "Starter",
    price: "Free",
    features: ["Publish 1 game", "Basic analytics", "Community support"],
    color: "bg-purple-600",
  },
  {
    id: 2,
    title: "Pro",
    price: "$10/month",
    features: ["Publish up to 5 games", "Advanced analytics", "Priority support"],
    color: "bg-blue-600",
  },
  {
    id: 3,
    title: "Enterprise",
    price: "Custom",
    features: ["Unlimited games", "Dedicated account manager", "Custom branding"],
    color: "bg-green-600",
  },
];

const DeveloperLandingPage = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      {/* Navbar */}
<nav className="bg-gray-800 p-2 flex justify-between items-center shadow-lg">
  <motion.h1
    className="text-2xl font-bold text-purple-400"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    WishAlpha
  </motion.h1>
  <div className="flex space-x-6 items-center">
    <Link to="/" className="text-white hover:text-purple-400 transition-colors">
      Home
    </Link>
    <Link to="/games" className="text-white hover:text-purple-400 transition-colors">
      Games
    </Link>
    <Link to="/about" className="text-white hover:text-purple-400 transition-colors">
      About
    </Link>
    <motion.button
      onClick={() => setIsRegisterOpen(true)}
      className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
      whileHover={{ scale: 1.05 }}
    >
      Register
    </motion.button>
  </div>
</nav>

      {/* Hero Section */}
      <div
        className="flex flex-col items-center justify-center h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: `url(/images/gamebg.jpg)` }}
      >
        <motion.h1
          className="text-6xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-gray-200 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Build, Publish, and Monetize Your Games
        </motion.h1>
        <motion.p
          className="text-lg text-gray-300 mb-8 max-w-2xl text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Join WishAlpha, the leading platform for indie developers to showcase their games to millions of players worldwide.
        </motion.p>
        <motion.button
          onClick={() => setIsRegisterOpen(true)}
          className="bg-purple-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-purple-700 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 px-6 bg-gray-800">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Choose Us?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              id: 1,
              title: "Global Reach",
              description: "Reach millions of players worldwide.",
              icon: "🌍",
              color: "bg-purple-600",
            },
            {
              id: 2,
              title: "Easy to Use",
              description: "Simple tools to publish and manage your games.",
              icon: "🛠️",
              color: "bg-blue-600",
            },
            {
              id: 3,
              title: "Monetization",
              description: "Earn revenue through ads and in-game purchases.",
              icon: "💰",
              color: "bg-green-600",
            },
          ].map((feature) => (
            <motion.div
              key={feature.id}
              className={`${feature.color} p-6 rounded-xl text-center shadow-lg`}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-200">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Featured Games Section */}
      <div className="py-16 px-6 bg-gray-900">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Games
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featuredGames.map((game) => (
            <motion.div
              key={game.id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{game.title}</h3>
                <p className="text-gray-300">Explore this exciting game!</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 px-6 bg-gray-800">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Developers Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-gray-700 p-6 rounded-xl"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold">{testimonial.name}</h3>
                  <p className="text-gray-300">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300">"{testimonial.comment}"</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-16 px-6 bg-gray-900">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Pricing Plans
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.id}
              className={`${plan.color} p-6 rounded-xl text-center shadow-lg`}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
              <p className="text-4xl font-bold mb-4">{plan.price}</p>
              <ul className="text-gray-200 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="mb-2">
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-white text-purple-600 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Banner */}
      <div className="py-16 px-6 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Ready to Publish Your Game?
          </motion.h2>
          <motion.p
            className="text-lg text-gray-200 mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Join WishAlpha today and start reaching millions of players worldwide.
          </motion.p>
          <motion.button
            onClick={() => setIsRegisterOpen(true)}
            className="bg-white text-purple-600 px-8 py-3 rounded-lg text-lg hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-purple-400 mb-4">WishAlpha</h3>
              <p className="text-gray-300">
                The ultimate platform for game developers and players.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-purple-400 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-300 hover:text-purple-400 transition-colors">Home</Link></li>
                <li><Link to="/games" className="text-gray-300 hover:text-purple-400 transition-colors">Games</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-purple-400 transition-colors">About</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-purple-400 mb-4">Contact Us</h3>
              <p className="text-gray-300">Email: support@WishAlpha.com</p>
              <p className="text-gray-300">Phone: +1 (123) 456-7890</p>
            </div>
          </div>
          <div className="mt-10 border-t border-gray-700 pt-6 text-center">
            <p className="text-gray-300">&copy; 2023 WishAlpha. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Registration Modal */}
      {isRegisterOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6">
          <motion.div
            className="bg-gray-800 rounded-xl p-8 w-full max-w-md"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-6">Register as a Developer</h2>
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-300 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Register
              </button>
            </form>
            <button
              onClick={() => setIsRegisterOpen(false)}
              className="mt-4 text-gray-300 hover:text-purple-400 transition-colors"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default DeveloperLandingPage;