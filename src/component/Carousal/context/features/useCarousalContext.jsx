import { useContext } from "react";
import CarousalContext from "../CarousalContext";

const useCarousalContext = () => {
  return useContext(CarousalContext);
};

export default useCarousalContext;
