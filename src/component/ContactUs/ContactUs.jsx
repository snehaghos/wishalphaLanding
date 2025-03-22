import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-4 text-purple-400">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {/* Contact Form */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3 text-purple-300">Get in Touch</h2>
          <form>
            <div className="mb-3">
              <label className="block text-gray-300 text-sm font-bold mb-1" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 bg-gray-700 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500"
                id="name"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-3">
              <label className="block text-gray-300 text-sm font-bold mb-1" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 bg-gray-700 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500"
                id="email"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-bold mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 bg-gray-700 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500"
                id="message"
                placeholder="Your Message"
                rows="3"
              ></textarea>
            </div>
            <button
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
        
        {/* Google Maps Embed */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-3 text-purple-300">Our Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.1473664879836!2d88.44265899999999!3d22.610971499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02757fcaf5fa09%3A0x8fa854cbea6d83f5!2sWISH%20COMPUTER%20%26%20EDUCATION%20CENTER!5e0!3m2!1sen!2sin!4v1742577956884!5m2!1sen!2sin"
            width="100%"
            height="250"
            className="rounded-lg shadow-md border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
