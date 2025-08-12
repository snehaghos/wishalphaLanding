import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Carousal from "../../component/Carousal/Carousal";
import Features from "../../component/Features/Features";
import GameSec from "../../component/Games/GameSec";



const Home = () => (
  <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center  bg-cover bg-center">
    <div className="w-full mb-10">
      <Carousal isVisible={true}/>
    </div>
    <div className=" mt-10">
      <GameSec/>
    </div>
    <Link to="/games">
      <button className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-xl text-lg shadow-lg hover:bg-purple-700 transition-colors">
        Show More
      </button>
    </Link>
  
    <div className="mt-20 mb-20 w-full ">
      <Features/>
    </div>
  </div>
);

export default Home;
