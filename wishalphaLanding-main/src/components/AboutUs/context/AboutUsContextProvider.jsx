import AboutUsContext from "./AboutUsContext";

const AboutUsContextProvider = ({ children }) => {
  return (
    <AboutUsContext.Provider value={{}}>{children}</AboutUsContext.Provider>
  );
};

export default AboutUsContextProvider;
