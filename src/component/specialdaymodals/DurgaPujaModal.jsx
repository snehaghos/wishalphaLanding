import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const DurgaPujaModal = ({ isOpen, onClose }) => {

  

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
              
            >
                <img src="./images/durgapuja.jpg" alt="Durga Puja modal" />
               
            </motion.div>
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
        </AnimatePresence>
    );
};

export default DurgaPujaModal;