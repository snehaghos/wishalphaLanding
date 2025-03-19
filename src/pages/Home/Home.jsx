import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import actionGame from "/images/chess.jpg";
import puzzleGame from "/images/chess.jpg";
import multiplayerGame from "/images/chess.jpg";
import racingGame from "/images/chess.jpg";
import strategyGame from "/images/chess.jpg";
import Carousal from "../../component/Carousal/Carousal";

const games = [
  { title: "Action Game", img: actionGame, desc: "Fast-paced and thrilling." },
  { title: "Puzzle Game", img: puzzleGame, desc: "Challenge your brain." },
  {
    title: "Multiplayer Game",
    img: multiplayerGame,
    desc: "Compete worldwide.",
  },
  { title: "Racing Game", img: racingGame, desc: "Speed and excitement." },
  { title: "Strategy Game", img: strategyGame, desc: "Plan and conquer." },
];

const Home = () => (
  <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10 bg-cover bg-center">
    <motion.h1
      className="text-6xl font-bold mb-6 text-white shadow-lg"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Play Awesome Games Instantly!
    </motion.h1>
    <p className="text-lg mb-6 text-gray-300">
      Discover, play, and enjoy a variety of games without downloads.
    </p>
    <div className="w-full max-w-7xl mt-10 mb-10">
      <Carousal/>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      {games.slice(0, 3).map((game, index) => (
        <motion.div
          key={index}
          className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform flex flex-col items-center"
          whileHover={{ scale: 1.1 }}
        >
          <img
            src={game.img}
            alt={game.title}
            className="w-full h-40 rounded-lg mb-4 object-cover"
          />
          <h2 className="text-xl font-bold text-purple-400">{game.title}</h2>
          <p className="text-gray-300 text-center">{game.desc}</p>
        </motion.div>
      ))}
    </div>
    <Link to="/games">
      <button className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-xl text-lg shadow-lg hover:bg-purple-700 transition-colors">
        Show More
      </button>
    </Link>
    <div className="mt-20 w-full max-w-6xl">
      <h2 className="text-4xl font-bold text-center mb-6">Who We Are</h2>
      <p className="text-lg text-gray-300 text-center max-w-2xl mx-auto">
        We are WishAlpha, a platform dedicated to bringing you the best gaming
        experience without the need for downloads. Our mission is to provide a
        wide variety of games, from action-packed adventures to brain-teasing
        puzzles, all in one place.
      </p>
    </div>
    <div className="mt-20 w-full max-w-6xl">
      <h2 className="text-4xl font-bold text-center mb-6">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "Instant Play",
            desc: "No downloads required. Start playing instantly.",
          },
          {
            title: "Wide Variety",
            desc: "Explore games across multiple genres.",
          },
          {
            title: "Community",
            desc: "Compete and connect with players worldwide.",
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold text-purple-400 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-300 text-center">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default Home;
