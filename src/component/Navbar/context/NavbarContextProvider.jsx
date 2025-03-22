import NavbarContext from "./NavbarContext";

const NavbarContextProvider = ({ children }) => {
  return <NavbarContext.Provider value={{}}>{children}</NavbarContext.Provider>;
};

export default NavbarContextProvider;
