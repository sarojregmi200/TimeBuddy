import { View, Text } from "react-native";
import React, { createContext, useState } from "react";

// creating the context provider
export const datalayer = createContext();

// context data layer wrapper
const Context = ({ children }) => {
  // state to render the routine
  // contains the dummy sample data for now
  const [routineInfo, setRoutineInfo] = useState([
    {
      _id: "abcxyz123",
      name: "Morning Time routine",
      days: [1, 0, 0, 0, 1, 0, 1],
      isOn: false,
    },
    {
      _id: "dsfj34dfsd",
      name: "Day Time routine",
      days: [0, 1, 0, 0, 0, 1, 0],
      isOn: true,
    },
    {
      _id: "df23dsfdf",
      name: "Evening Time routine",
      days: [0, 1, 1, 1, 1, 0, 0],
      isOn: false,
    },
  ]);

  return (
    <datalayer.Provider value={{ Routine: [routineInfo, setRoutineInfo] }}>
      {children}
    </datalayer.Provider>
  );
};

export default Context;
