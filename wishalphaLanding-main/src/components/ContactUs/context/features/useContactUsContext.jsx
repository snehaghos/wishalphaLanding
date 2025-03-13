import { useContext } from "react";
import ContactUsContext from "../ContactUsContext";

const useContactUsContext = () => {
  return useContext(ContactUsContext);
};

export default useContactUsContext;
