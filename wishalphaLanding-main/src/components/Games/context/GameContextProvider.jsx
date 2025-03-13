import GameContext from "./GameContext";

const GameContextProvider = ({ children }) => {
  return <GameContext.Provider value={{}}>{children}</GameContext.Provider>;
};

export default GameContextProvider;
