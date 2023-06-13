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

  // state that controls says whether the list is holded or touched when the list item is touched..
  const [isHold, setIsHold] = useState({ id: "none", state: false });

  // state to control the popup models
  const [popup, setPopup] = useState({ type: "none", state: true });
  return (
    <datalayer.Provider
      value={{
        routine: [routineInfo, setRoutineInfo],
        listItem: [isHold, setIsHold],
        popup: [popup, setPopup],
      }}
    >
      {children}
    </datalayer.Provider>
  );
};

export default Context;
