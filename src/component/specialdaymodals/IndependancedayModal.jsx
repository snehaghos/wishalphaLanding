import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";

const Independencedaymodal = ({ isOpen, onClose }) => {
    const [fireworks, setFireworks] = useState([]);

    useEffect(() => {
        if (!isOpen) return;

        const generateFireworks = () => {
            const newFireworks = [];
            for (let i = 0; i < 12; i++) {
                const centerX = Math.random() * 100;
                const centerY = Math.random() * 100;
                const numParticles = 10 + Math.floor(Math.random() * 10);
                for (let p = 0; p < numParticles; p++) {
                    const angle = (Math.PI * 2 * p) / numParticles;
                    const distance = 20 + Math.random() * 30;
                    newFireworks.push({
                        id: `${i}-${p}-${Date.now()}`,
                        x: centerX,
                        y: centerY,
                        dx: Math.cos(angle) * distance,
                        dy: Math.sin(angle) * distance,
                        delay: Math.random() * 0.5,
                        duration: 1 + Math.random() * 1.5,
                        size: 4 + Math.random() * 6,
                        color: ["#FF9933", "#FFFFFF", "#138808"][
                            Math.floor(Math.random() * 3)
                        ],
                    });
                }
            }
            setFireworks(newFireworks);
        };

        generateFireworks();
        const interval = setInterval(generateFireworks, 3000);
        return () => clearInterval(interval);
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
                style={{
                    background: "linear-gradient(180deg, rgba(0,0,0,0.9), rgba(10,15,30,0.95))",
                    backdropFilter: "blur(10px)",
                }}
                onClick={onClose}
            >
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {fireworks.map((fw) => (
                        <motion.div
                            key={fw.id}
                            className="absolute rounded-full opacity-80"
                            style={{
                                left: `${fw.x}%`,
                                top: `${fw.y}%`,
                                width: `${fw.size}px`,
                                height: `${fw.size}px`,
                                backgroundColor: fw.color,
                            }}
                            initial={{ x: 0, y: 0, opacity: 1 }}
                            animate={{
                                x: fw.dx,
                                y: fw.dy,
                                opacity: 0,
                                scale: 0.5,
                            }}
                            transition={{
                                duration: fw.duration,
                                delay: fw.delay,
                                ease: "easeOut",
                            }}
                        />
                    ))}
                </div>

                <motion.div
                    initial={{ scale: 0.8, opacity: 0, rotateX: -30 }}
                    animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                    exit={{ scale: 0.7, opacity: 0, rotateX: 20 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="relative max-w-4xl w-full"
                    onClick={(e) => e.stopPropagation()}
                >
                    <motion.div
                        animate={{
                            boxShadow: [
                                "0 0 25px #FF9933",
                                "0 0 35px #FFFFFF",
                                "0 0 25px #138808",
                                "0 0 25px #FF9933",
                            ],
                        }}
                        transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
                        className="absolute inset-0 rounded-xl -z-10"
                    />

                    <div className="relative bg-white/5 backdrop-blur-xl rounded-xl p-6 md:p-10 overflow-hidden">
                       
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2 }}
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={onClose}
                            className="
        absolute top-2 right-2 sm:top-4 sm:right-4 
        z-[100] 
        bg-white/20 hover:bg-white/30 
        rounded-full 
        p-1 sm:p-2 
        transition-all duration-300
    "
                            style={{
                                backdropFilter: "blur(6px)"
                            }}
                        >
                            <X className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                        </motion.button>


                        <div className="relative z-10 text-center">
                            <motion.div
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1, duration: 1, ease: "easeOut" }}
                                className="mb-6 md:mb-8 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.3)] inline-block"
                            >
                                <video
                                    src="./vid/flag.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-[420px] md:w-[420px] sm:w-[320px] h-auto object-cover"
                                />
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 2, duration: 0.8 }}
                                className="text-xl sm:text-3xl md:text-4xl font-semibold text-white drop-shadow-lg"
                            >
                                <span className="bg-gradient-to-r from-orange-400 via-white to-green-500 bg-clip-text text-transparent">
                                    Team WishAlpha Celebrating
                                </span>
                            </motion.h2>

                            <motion.h1
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 2.5, duration: 1 }}
                                className="mt-4 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-widest drop-shadow-[0_0_25px_rgba(255,255,255,0.5)]"
                                style={{
                                    backgroundImage: "linear-gradient(90deg, #FF9933, #FFFFFF, #138808)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                HAPPY INDEPENDENCE DAY
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 3 }}
                                className="mt-6 flex justify-center gap-6 items-center"
                            >
                                <motion.div
                                    animate={{
                                        opacity: [0.7, 1, 0.7],
                                        filter: [
                                            "drop-shadow(0 0 3px #ff9933)",
                                            "drop-shadow(0 0 8px #ff9933)",
                                            "drop-shadow(0 0 3px #ff9933)",
                                        ],
                                    }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <Sparkles className="w-8 h-8 text-orange-400" />
                                </motion.div>

                                <motion.p
                                    className="text-lg md:text-2xl text-white font-bold"
                                    style={{ textShadow: "0 0 15px rgba(255,215,0,0.8)" }}
                                    animate={{
                                        textShadow: [
                                            "0 0 15px rgba(255,215,0,0.8)",
                                            "0 0 25px rgba(255,215,0,1)",
                                            "0 0 15px rgba(255,215,0,0.8)",
                                        ],
                                    }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    Celebrating 79 Years of Freedom!
                                </motion.p>

                                <motion.div
                                    animate={{
                                        opacity: [0.7, 1, 0.7],
                                        filter: [
                                            "drop-shadow(0 0 3px #138808)",
                                            "drop-shadow(0 0 8px #138808)",
                                            "drop-shadow(0 0 3px #138808)",
                                        ],
                                    }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <Sparkles className="w-8 h-8 text-green-500" />
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Independencedaymodal;