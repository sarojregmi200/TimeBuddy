import { View, Text } from "react-native";
import React, { createContext } from "react";

// creating the context provider
export const datalayer = createContext();

// context data layer wrapper
const Context = ({ children }) => {
  return (
    <datalayer.Provider value={"this is the test data"}>
      {children}
    </datalayer.Provider>
  );
};

export default Context;
