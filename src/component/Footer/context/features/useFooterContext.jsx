import { useContext } from "react";
import FooterContext from "../FooterContext";

const useFooterContext = () => {
  return useContext(FooterContext);
};

export default useFooterContext;
