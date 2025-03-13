import ContactUsContext from "./ContactUsContext";

const ContactUsContextProvider = ({ children }) => {
  return (
    <ContactUsContext.Provider value={{}}>{children}</ContactUsContext.Provider>
  );
};

export default ContactUsContextProvider;
