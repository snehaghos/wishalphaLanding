import React from 'react'

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-10">
    <h1 className="text-4xl font-bold mb-6">Blog</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3].map((post) => (
        <div key={post} className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold text-purple-400 mb-2">Blog Post {post}</h2>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet libero vitae nisi tincidunt ultrices.
          </p>
        </div>
      ))}
    </div>
  </div>  
  )
}

export default Blog