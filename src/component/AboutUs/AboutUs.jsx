import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-10">
      <h1 className="text-4xl font-bold mb-6">About Our Gaming Platform</h1>
      
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <p className="text-lg text-gray-300 mb-6">
          Welcome to our gaming platform! We are dedicated to bringing you the best gaming experience without the need for downloads. Our mission is to provide a seamless and enjoyable environment where gamers of all levels can find something exciting to play.
        </p>
        
        <p className="text-lg text-gray-300 mb-6">
          Our platform offers a wide variety of games, ranging from action-packed adventures and strategic battles to brain-teasing puzzles and relaxing simulations. Whether you're a casual player or a hardcore gamer, we have something for everyone.
        </p>
        
        <p className="text-lg text-gray-300 mb-6">
          We pride ourselves on our user-friendly interface, high-quality graphics, and smooth gameplay. Our team is constantly working to add new games and features to keep the experience fresh and engaging.
        </p>
        
        <p className="text-lg text-gray-300">
          Join our community today and start exploring the vast world of games we have to offer. Whether you're looking to compete with friends, challenge yourself, or just unwind, our platform is the perfect place to do it. Happy gaming!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;