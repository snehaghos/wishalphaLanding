import { useContext } from "react";
import SupportUsContext from "../SupportUsContext";

const useSupportUsContext = () => {
  return useContext(SupportUsContext);
};

export default useSupportUsContext;
