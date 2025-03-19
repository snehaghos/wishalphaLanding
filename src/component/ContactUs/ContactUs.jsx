import React from 'react'

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-10">
    <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
    <form className="w-full max-w-lg">
      <div className="mb-4">
        <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Your Name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Your Email"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="message"
          placeholder="Your Message"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Send Message
        </button>
      </div>
    </form>
  </div>
  )
}

export default ContactUs