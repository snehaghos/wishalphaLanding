import React from 'react'

const SupportUs = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-10">
    <h1 className="text-4xl font-bold mb-6">Support Us</h1>
    <p className="text-lg text-gray-300 max-w-2xl text-center">
      If you enjoy our platform, consider supporting us to keep it running and ad-free. Your support helps us bring more awesome games to you!
    </p>
    <button className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-xl text-lg shadow-lg hover:bg-purple-700 transition-colors">
      Donate Now
    </button>
  </div>
  )
}

export default SupportUs