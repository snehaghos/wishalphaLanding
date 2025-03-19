import { useContext } from "react";
import NavbarContext from "../NavbarContext";

const useNavbarContext = () => {
  return useContext(NavbarContext);
};

export default useNavbarContext;
