import { createContext } from "react";

// provides the context data
export const contextProvider = createContext();

// wrapper to wrap the app to be able to send data
const Context = ({ children }) => {
  return (
    <contextProvider.Provider value={"I am context"}>
      {children}
    </contextProvider.Provider>
  );
};

export default Context;
