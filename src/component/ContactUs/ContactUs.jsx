import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="relative min-h-screen bg-gray-950 text-white flex flex-col items-center p-8 overflow-hidden">
    
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[250px] bg-purple-900/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-[50%] h-[200px] bg-purple-800/10 blur-2xl rounded-full" />


      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3 mb-8 z-10 mt-16"
      >
        <Mail className="w-8 h-8 text-purple-400" />
        <h1 className="text-4xl font-bold tracking-tight text-white">Contact Us</h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl z-10">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-800"
        >
          <h2 className="text-xl font-semibold mb-4 text-purple-300 flex items-center gap-2">
            <Send className="w-5 h-5" /> Get in Touch
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-300 text-sm mb-1" htmlFor="name">
                Name
              </label>
              <input
                className="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                id="name"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-1" htmlFor="email">
                Email
              </label>
              <input
                className="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                id="email"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                id="message"
                placeholder="Your Message"
                rows="3"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              type="submit"
            >
              Send Message
              <Send className="w-4 h-4" />
            </motion.button>
          </form>
        </motion.div>

      \
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-800 flex flex-col items-center"
        >
          <h2 className="text-xl font-semibold mb-4 text-purple-300 flex items-center gap-2">
            <MapPin className="w-5 h-5" /> Our Location
          </h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.1473664879836!2d88.44265899999999!3d22.610971499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02757fcaf5fa09%3A0x8fa854cbea6d83f5!2sWISH%20COMPUTER%20%26%20EDUCATION%20CENTER!5e0!3m2!1sen!2sin!4v1742577956884!5m2!1sen!2sin"
            width="100%"
            height="250"
            className="rounded-lg shadow-lg border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
