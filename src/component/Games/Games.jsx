import React from 'react';
import { motion } from 'framer-motion';


import actionGame from '/images/chess.jpg';
import puzzleGame from '/images/puzzle.jpg';
import multiplayerGame from '/images/multi.jpeg';
import racingGame from '/images/race.jpg';
import strategyGame from '/images/strategy.jpeg';
import { useNavigate } from 'react-router-dom';

const games = [
    { title: 'Action Game', img: actionGame, desc: 'Fast-paced and thrilling.', type: 'action' },
    { title: 'Puzzle Game', img: puzzleGame, desc: 'Challenge your brain.', type: 'puzzle' },
    { title: 'Multiplayer Game', img: multiplayerGame, desc: 'Compete worldwide.', type: 'multiplayer' },
    { title: 'Racing Game', img: racingGame, desc: 'Speed and excitement.', type: 'racing' },
    { title: 'Strategy Game', img: strategyGame, desc: 'Plan and conquer.', type: 'strategy' },
];

const Games = () => {
    const navigate = useNavigate(); 

    const handleGameClick = (type) => {
        navigate(`/games/${type}`); 
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-10">
            <h1 className="text-4xl font-bold mb-6">All Games</h1>
            
            <div className="grid grid-cols-3 gap-6">
                {games.map((game, index) => (
                    <motion.div
                        key={index}
                        className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform flex flex-col items-center cursor-pointer"
                        whileHover={{ scale: 1.1 }}
                        onClick={() => handleGameClick(game.type)} 
                    >
                        <img src={game.img} alt={game.title} className="w-full h-40 rounded-lg mb-4" />
                        <h2 className="text-xl font-bold text-purple-400">{game.title}</h2>
                        <p className="text-gray-300 text-center">{game.desc}</p>
                      
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Games;