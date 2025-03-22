import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 5 Trending Games of 2023",
      content: "Discover the most popular games of 2023 that are taking the gaming world by storm. From action-packed adventures to immersive RPGs, these games are a must-play for any gamer.",
    },
    {
      id: 2,
      title: "How to Improve Your Gaming Skills",
      content: "Want to level up your gaming skills? Check out these tips and tricks to enhance your gameplay, from mastering controls to developing better strategies.",
    },
    {
      id: 3,
      title: "The Rise of Mobile Gaming",
      content: "Mobile gaming is booming, and it's not just for casual players anymore. Learn how mobile games are evolving and why they're becoming a favorite among gamers worldwide.",
    },
    {
      id: 4,
      title: "Best Multiplayer Games to Play with Friends",
      content: "Looking for fun games to play with friends? Here’s a list of the best multiplayer games that guarantee hours of entertainment and friendly competition.",
    },
    {
      id: 5,
      title: "The Future of Virtual Reality in Gaming",
      content: "Virtual reality is revolutionizing the gaming industry. Explore how VR is changing the way we play and what the future holds for immersive gaming experiences.",
    },
    {
      id: 6,
      title: "Top Gaming Accessories You Need in 2023",
      content: "Upgrade your gaming setup with these essential accessories. From high-performance headsets to ergonomic chairs, these gadgets will take your gaming to the next level.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-10">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold text-purple-400 mb-2">{post.title}</h2>
            <p className="text-gray-300">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;