import { useContext } from "react";
import AboutUsContext from "../AboutUsContext";

const useAboutUsContext = () => {
  return useContext(AboutUsContext);
};

export default useAboutUsContext;
