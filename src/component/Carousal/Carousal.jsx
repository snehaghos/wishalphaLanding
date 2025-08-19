import React, { useState, useEffect } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Play, Download, ArrowBigLeftDash, ArrowBigRightDash } from "lucide-react"
import SplashCursor from "../../bits/SplashCursor"
import { Link } from "react-router-dom"



const InteractiveBackground = () => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e
    const { innerWidth, innerHeight } = window
    mouseX.set((clientX / innerWidth - 0.5) * 2)
    mouseY.set((clientY / innerHeight - 0.5) * 2)
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])


  return (
    <>
      <motion.div

        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
      />
      <motion.div

        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
      />

      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-purple-400/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </>
  )
}

const InteractiveTitle = ({ isVisible }) => {
  const [hoveredWord, setHoveredWord] = useState(null)
  const words = ["Enter", "the", "Ultimate", "Coding", "Universe"]

  return (
    <motion.h1
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className={`inline-block mr-4 cursor-pointer ${hoveredWord === index
            ? "bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
            : "bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
            }`}
          onMouseEnter={() => setHoveredWord(index)}
          onMouseLeave={() => setHoveredWord(null)}
          whileHover={{
            scale: 1.1,
            y: -10,
            rotateX: 15,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  )
}

const InteractiveDescription = ({ isVisible }) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [2, -2]))
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-2, 2]))

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
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      style={{ rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02, y: -5 }}
      className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed font-light cursor-pointer"
    >
      Discover epic adventures, compete in tournaments, and join millions of gamers in the most immersive gaming
      platform ever created.
    </motion.p>
  )
}

const InteractiveButtons = ({ isVisible }) => {

  const handleRegister = () => {
    console.log("Register button clicked")
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
    >
      <motion.button
        whileHover={{
          scale: 1.05,
          boxShadow: "0 20px 60px rgba(168, 85, 247, 0.4)",
          y: -5,
        }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg text-lg font-semibold transition-all duration-300 overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6 }}
        />
        <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.6 }}>
          <Play className="mr-2 h-5 w-5" />
        </motion.div>
        <Link to="/team" className="text-white">
          Visit Core Team
        </Link>
      </motion.button>
<Link to="/nopagefound" onClick={handleRegister()} className="text-white">
      <motion.button
        whileHover={{
          scale: 1.05,
          borderColor: "rgb(168, 85, 247)",
          boxShadow: "0 10px 30px rgba(168, 85, 247, 0.2)",
          y: -5,
        }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex items-center px-8 py-4 border border-gray-600 text-gray-300 hover:bg-gray-800 rounded-lg text-lg font-semibold transition-all duration-300 overflow-hidden"
      >
        
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.3 }}
          />
          <motion.div whileHover={{ y: -2, scale: 1.1 }} transition={{ duration: 0.3 }}>
            <ArrowBigRightDash className="mr-2 h-5 w-5" />
          </motion.div>

          Register now
      
      </motion.button>
  </Link>
    </motion.div >
  )
}

const InteractiveStatCard = ({ stat, index }) => {
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
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        scale: 1.15,
        y: -10,
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
      }}
      className={`group cursor-pointer p-6 rounded-2xl ${stat.bgColor} backdrop-blur-sm border border-gray-700/50 transition-all duration-300`}
    >
      <motion.div
        className={`text-3xl font-bold ${stat.color} transition-all duration-300 mb-2`}
        whileHover={{ scale: 1.2 }}
      >
        {stat.value}
      </motion.div>
      <motion.div className="text-gray-400 font-medium" whileHover={{ color: "#ffffff" }}>
        {stat.label}
      </motion.div>


      <motion.div
        className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 ${stat.bgColor.replace("/10", "/30")}`}
        initial={{ scale: 0.8 }}
        whileHover={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}

const InteractiveStats = ({views}) => {
  const stats = [
    { value: views ? `${views}+` : "...", label: "Website Visits", color: "text-purple-400", bgColor: "bg-purple-500/10" },
    { value: "500+", label: "Games Available", color: "text-pink-400", bgColor: "bg-pink-500/10" },
    { value: "24/7", label: "Online Support", color: "text-blue-400", bgColor: "bg-blue-500/10" },
    { value: "99.9%", label: "Uptime", color: "text-green-400", bgColor: "bg-green-500/10" },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {stats.map((stat, index) => (
        <InteractiveStatCard key={stat.label} stat={stat} index={index} />
      ))}
    </div>
  )
}

const InteractiveHeroContent = ({ isVisible,views }) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]))
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]))

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
      className="text-center max-w-4xl mx-auto"
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        initial={{ y: 30 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.05, y: -5 }}
        className="mb-6 inline-block px-4 py-2 bg-purple-600/20 text-purple-300 border border-purple-500/30 rounded-full font-medium cursor-pointer"
      >
        🎮 New Games Available Now
      </motion.div>

      <InteractiveTitle isVisible={isVisible} />
      <InteractiveDescription isVisible={isVisible} />
      <InteractiveButtons isVisible={isVisible} />
      <InteractiveStats views={views} />
    </motion.div>
  )
}

const Carousal = ({ isVisible,views }) => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-950 to-pink-900/20 z-0" />


      {/* <SplashCursor/> */}
      <InteractiveBackground />

      <InteractiveBackground />
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
 <InteractiveHeroContent isVisible={isVisible} views={views} />
      </div>
    </section>
  )
}

export default Carousal