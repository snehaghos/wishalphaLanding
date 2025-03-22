import React from 'react';
import { useParams } from 'react-router-dom'; 

const gamesByType = {
    action: [
        { title: 'Action Game 1', img: '/images/action.jpg', desc: 'Thrilling action-packed game.' },
        { title: 'Action Game 2', img: '/images/action.jpg', desc: 'Fast-paced combat game.' },
    ],
    puzzle: [
        { title: 'Puzzle Game 1', img: '/images/puzzle.jpg', desc: 'Solve challenging puzzles.' },
        { title: 'Puzzle Game 2', img: '/images/puzzle.jpg', desc: 'Test your brainpower.' },
    ],
    multiplayer: [
        { title: 'Multiplayer Game 1', img: '/images/multi.jpeg', desc: 'Compete with friends.' },
        { title: 'Multiplayer Game 2', img: '/images/multi.jpeg', desc: 'Team up and win.' },
    ],
    racing: [
        { title: 'Racing Game 1', img: '/images/race.jpg', desc: 'High-speed racing action.' },
        { title: 'Racing Game 2', img: '/images/race.jpg', desc: 'Drift and win races.' },
    ],
    strategy: [
        { title: 'Strategy Game 1', img: '/images/strategy.jpeg', desc: 'Plan and conquer the world.' },
        { title: 'Strategy Game 2', img: '/images/strategy.jpeg', desc: 'Build and defend your empire.' },
    ],
};

const GameTypePage = () => {
    const { type } = useParams(); 

    const games = gamesByType[type] || [];

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-10">
            <h1 className="text-4xl font-bold mb-6">{type.charAt(0).toUpperCase() + type.slice(1)} Games</h1>
            <div className="grid grid-cols-3 gap-6">
                {games.map((game, index) => (
                    <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center">
                        <img src={game.img} alt={game.title} className="w-full h-40 rounded-lg mb-4" />
                        <h2 className="text-xl font-bold text-purple-400">{game.title}</h2>
                        <p className="text-gray-300 text-center">{game.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GameTypePage;