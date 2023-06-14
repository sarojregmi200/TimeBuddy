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
      tasks: [
        {
          _id: "x234dsf3rsdf2",
          name: "Fill the water bottle",
          time: "6:30-7:30",
          isOn: false,
        },
        {
          _id: "yse34dsf3rsdf2",
          name: "empty the water bottle",
          time: "9:30-10:30",
          isOn: true,
        },
      ],
    },
    {
      _id: "dsfj34dfsd",
      name: "Day Time routine",
      days: [0, 1, 0, 0, 0, 1, 0],
      isOn: true,
      tasks: [
        {
          _id: "x234dsf3rsdf2",
          name: "Fill the water bottle",
          time: "6:30-7:30",
          isOn: false,
        },
        {
          _id: "yse34dsf3rsdf2",
          name: "empty the water bottle",
          time: "9:30-10:30",
          isOn: true,
        },
      ],
    },
    {
      _id: "df23dsfdf",
      name: "Evening Time routine",
      days: [0, 1, 1, 1, 1, 0, 0],
      isOn: false,
      tasks: [
        {
          _id: "x234dsf3rsdf2",
          name: "Fill the water bottle",
          time: "6:30-7:30",
          isOn: false,
        },
        {
          _id: "yse34dsf3rsdf2",
          name: "empty the water bottle",
          time: "9:30-10:30",
          isOn: true,
        },
      ],
    },
  ]);

  // state that controls says whether the list is holded or touched when the list item is touched..
  const [isHold, setIsHold] = useState({ id: "none", state: false });

  // state to control the popup models
  const [popup, setPopup] = useState({ type: "Routine", state: false });

  // state that controls the validity of the creation
  const [valid, setValid] = useState(false);

  return (
    <datalayer.Provider
      value={{
        routine: [routineInfo, setRoutineInfo],
        listItem: [isHold, setIsHold],
        popup: [popup, setPopup],
        form: [valid, setValid],
      }}
    >
      {children}
    </datalayer.Provider>
  );
};

export default Context;
