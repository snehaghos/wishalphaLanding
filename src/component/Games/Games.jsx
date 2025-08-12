import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Sparkles, Gamepad2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import actionGame from '/images/chess.jpg';
import puzzleGame from '/images/puzzle.jpg';
import multiplayerGame from '/images/multi.jpeg';
import racingGame from '/images/race.jpg';
import strategyGame from '/images/strategy.jpeg';

const games = [
  { title: 'Action Game', img: actionGame, desc: 'Fast-paced and thrilling.', type: 'action' },
  { title: 'Puzzle Game', img: puzzleGame, desc: 'Challenge your brain.', type: 'puzzle' },
  { title: 'Multiplayer Game', img: multiplayerGame, desc: 'Compete worldwide.', type: 'multiplayer' },
  { title: 'Racing Game', img: racingGame, desc: 'Speed and excitement.', type: 'racing' },
  { title: 'Strategy Game', img: strategyGame, desc: 'Plan and conquer.', type: 'strategy' },
];

export default function Games() {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleGameClick = (type) => {
    navigate(`/games/${type}`);
  };

  return (
    <div className="min-h-screen  bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white flex flex-col items-center p-10">
     
      <div className="flex items-center gap-3 mb-12 mt-16">
        <Sparkles className="w-8 h-8 text-purple-400 animate-pulse" />
        <h1 className="text-5xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          Game Universe
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {games.map((game, index) => {
          const cardRef = useRef(null);
          const x = useMotionValue(0);
          const y = useMotionValue(0);

          const rotateX = useTransform(y, [-50, 50], [15, -15]);
          const rotateY = useTransform(x, [-50, 50], [-15, 15]);

          const handleMouseMove = (e) => {
            const rect = cardRef.current.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            x.set(mouseX - rect.width / 2);
            y.set(mouseY - rect.height / 2);
          };

          const handleMouseLeave = () => {
            x.set(0);
            y.set(0);
          };

          return (
            <motion.div
              key={index}
              ref={cardRef}
              className="relative group cursor-pointer"
              style={{ perspective: 1000 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleGameClick(game.type)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseOut={() => setHoveredIndex(null)}
            >
        
              <motion.div
                style={{ rotateX, rotateY }}
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-50 blur-2xl group-hover:opacity-90 transition duration-300"
              />

             
              <motion.div
                style={{ rotateX, rotateY }}
                className="relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl"
              >
               
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent animate-gradientMove pointer-events-none" />

         
                <img src={game.img} alt={game.title} className="w-full h-48 object-cover" />

                <div className="p-6 flex flex-col items-start">
                  <div className="flex items-center gap-2 mb-2">
                    <Gamepad2 className="text-purple-400 w-5 h-5" />
                    <h2 className="text-2xl font-bold text-purple-400">{game.title}</h2>
                  </div>
                  <p className="text-gray-300">{game.desc}</p>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
