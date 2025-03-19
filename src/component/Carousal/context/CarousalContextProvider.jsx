import CarousalContext from "./CarousalContext";

const CarousalContextProvider = ({ children }) => {
  return (
    <CarousalContext.Provider value={{}}>{children}</CarousalContext.Provider>
  );
};

export default CarousalContextProvider;
