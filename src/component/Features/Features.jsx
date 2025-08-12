import React from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Gamepad2, Trophy, Users, Zap, Shield, Headphones } from "lucide-react"

const FeatureCard = ({ feature, index }) => {
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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800/30 border border-gray-700 hover:bg-gray-800/50 rounded-xl p-6 text-center cursor-pointer transition-all duration-500"
    >
      <motion.div
        whileHover={{ scale: 1.2, rotate: 360 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4"
      >
        {feature.icon}
      </motion.div>
      <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
      <p className="text-gray-300 font-light">{feature.description}</p>
    </motion.div>
  )
}

const Features = () => {
  const features = [
    {
      icon: <Gamepad2 className="h-8 w-8" />,
      title: "Epic Gaming Experience",
      description: "Immerse yourself in stunning graphics and captivating storylines across multiple genres.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Multiplayer Battles",
      description: "Team up with friends or compete against players worldwide in intense multiplayer matches.",
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Competitive Tournaments",
      description: "Join esports tournaments and climb the leaderboards to become a gaming legend.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Lightning Fast Performance",
      description: "Experience smooth gameplay with optimized performance and minimal latency.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure Gaming",
      description: "Play with confidence knowing your account and progress are protected by advanced security.",
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "24/7 Support",
      description: "Get help whenever you need it with our dedicated gaming support team.",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Why Choose WishAlpha?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            Experience gaming like never before with our cutting-edge features
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features;