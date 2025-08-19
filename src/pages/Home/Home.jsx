import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Carousal from "../../component/Carousal/Carousal";
import Features from "../../component/Features/Features";
import GameSec from "../../component/Games/GameSec";
import DurgaPujaModal from "../../component/specialdaymodals/DurgaPujaModal";
import { db } from "../../lib/firebase";
import { doc, getDoc, setDoc, updateDoc, increment } from "firebase/firestore";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [views, setViews] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const updateViews = async () => {
      try {
        const counterRef = doc(db, "pageViews", "landing");
        const snap = await getDoc(counterRef);

        if (!isMounted) return;

        if (!snap.exists()) {
          await setDoc(counterRef, { count: 1 });
          if (isMounted) setViews(1);
        } else {
          await updateDoc(counterRef, { count: increment(1) });
          const updatedSnap = await getDoc(counterRef);
          if (isMounted) setViews(updatedSnap.data().count);
        }
      } catch (error) {
        console.error("Error updating views:", error);
      }
    };

    updateViews();

    return () => {
      isMounted = false;
    };
  }, []);


  
  useEffect(() => {
  
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center bg-cover bg-center">
      <DurgaPujaModal isOpen={showModal} onClose={closeModal} />
      
      <div className="w-full mb-10">
 <Carousal isVisible={true} views={views} />      </div>
      
      <div className="mt-10">
        <GameSec/>
      </div>
      
      <Link to="/games">
        <button className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-xl text-lg shadow-lg hover:bg-purple-700 transition-colors">
          Show More
        </button>
      </Link>
      
      <div className="mt-20 mb-20 w-full">
        <Features/>
      </div>
    </div>
  );
};

export default Home;