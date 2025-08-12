import React from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ChevronRight, Play, Users } from "lucide-react"

const GameCard = ({ game, index }) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]))
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]))

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set((e.clientX - centerX) / rect.width)
    mouseY.set((e.clientY - centerY) / rect.height)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="relative bg-gray-800/50 rounded-2xl overflow-hidden group cursor-pointer"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="relative h-80 overflow-hidden">
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.6 }}>
            <img src={game.image || "/placeholder.svg"} alt={game.title} className="w-full h-[100vh-] object-cover" />
          </motion.div>

          <div
            className={`absolute inset-0 bg-gradient-to-t ${game.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
          />

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute top-4 left-4 px-3 py-1 bg-purple-600/90 text-white rounded-full text-sm font-medium backdrop-blur-sm"
          >
            {game.status}
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4 }}
            className="absolute top-4 right-4 flex items-center space-x-1 bg-black/50 px-2 py-1 rounded-full backdrop-blur-sm"
          >
            <svg className="h-4 w-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="text-white text-sm font-medium">{game.rating}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold"
            >
              <Play className="mr-2 h-5 w-5" />
              Play Now
            </motion.button>
          </motion.div>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <motion.h3 whileHover={{ x: 5 }} className="text-2xl font-bold text-white">
              {game.title}
            </motion.h3>
            <div className="flex items-center space-x-2 text-gray-400">
              <Users className="h-4 w-4" />
              <span className="text-sm font-medium">{game.players}</span>
            </div>
          </div>

          <p className="text-purple-400 font-medium mb-3">{game.genre}</p>
          <p className="text-gray-300 font-light leading-relaxed">{game.description}</p>

          <motion.div whileHover={{ scale: 1.02 }} className="mt-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${game.color}`} />
              <span className="text-gray-400 text-sm">Online</span>
            </div>
            <motion.div whileHover={{ x: 5 }} className="flex items-center text-purple-400 font-medium">
              Learn More
              <ChevronRight className="ml-1 h-4 w-4" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const GameSec = () => {
  const games = [
    {
      title: "raceX",
      genre: "Action",
      rating: 4.8,
      image: "/images/action.jpg",
      status: "New Release",
      description: "Dive into a neon-lit cyberpunk world where technology meets humanity in the ultimate battle for survival.",
      players: "2.5M",
      color: "from-cyan-500 to-blue-600",
    },
    {
      title: "Minweswepper",
      genre: "Pizzle",
      rating: 4.9,
      image: "/images/strategy.jpeg",
      status: "Popular",
      description: "Embark on an epic medieval adventure filled with dragons, magic, and legendary treasures.",
      players: "3.8M",
      color: "from-orange-500 to-red-600",
    },
    {
      title: "Chess Master",
      genre: "Puzzle",
      rating: 4.7,
      image: "/images/chess.jpg",
      status: "Trending",
      description: "Command your fleet in intense space battles across the galaxy in this action-packed shooter.",
      players: "1.9M",
      color: "from-purple-500 to-pink-600",
    }
  ]

  return (
    <section id="games" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Games
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            Discover the latest and most popular games in our collection
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <GameCard key={index} game={game} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default GameSec
