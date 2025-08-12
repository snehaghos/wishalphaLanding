import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="relative min-h-screen bg-gray-950 text-white flex flex-col items-center p-10 overflow-hidden">
     
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-purple-900/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-[60%] h-[200px] bg-purple-800/10 blur-2xl rounded-full" />


      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center mt-16 gap-3 mb-10 z-10"
      >
        <Sparkles className="w-8 h-8 text-purple-400" />
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
          About Our Gaming Platform
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative bg-gray-900 p-8 rounded-xl shadow-xl w-full max-w-3xl border border-gray-800 z-10"
      >
        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>
            Welcome to our gaming platform! We are dedicated to bringing you
            the best gaming experience without the need for downloads. Our
            mission is to provide a seamless and enjoyable environment where
            gamers of all levels can find something exciting to play.
          </p>

          <p>
            Our platform offers a wide variety of games, ranging from
            action-packed adventures and strategic battles to brain-teasing
            puzzles and relaxing simulations. Whether you're a casual player or
            a hardcore gamer, we have something for everyone.
          </p>

          <p>
            We pride ourselves on our user-friendly interface, high-quality
            graphics, and smooth gameplay. Our team is constantly working to
            add new games and features to keep the experience fresh and
            engaging.
          </p>

          <p>
            Join our community today and start exploring the vast world of
            games we have to offer. Whether you're looking to compete with
            friends, challenge yourself, or just unwind, our platform is the
            perfect place to do it.{" "}
            <span className="text-purple-400 font-semibold">
              Happy gaming!
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
