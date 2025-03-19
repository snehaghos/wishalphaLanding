import SupportUsContext from "./SupportUsContext";

const SupportUsContextProvider = ({ children }) => {
  return (
    <SupportUsContext.Provider value={{}}>{children}</SupportUsContext.Provider>
  );
};

export default SupportUsContextProvider;
