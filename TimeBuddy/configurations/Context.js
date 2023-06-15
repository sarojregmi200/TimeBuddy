import React, { createContext, useEffect, useState } from "react";

// creating the context provider
export const datalayer = createContext();

// importing the appwrite configurations
import { DB, DBId, CollectionId, getDeviceId } from "./appwrite.config.js";
import { Query } from "appwrite";

// context data layer wrapper
const Context = ({ children }) => {
  // state to render the routine
  // contains the dummy sample data for now
  const [routineInfo, setRoutineInfo] = useState([
    {
      r_id: "abcxyz123",
      name: "Morning Time routine",
      days: [1, 0, 0, 0, 1, 0, 1],
      isOn: false,
      tasks: [
        {
          t_id: "x234dsf3rsdf2",
          name: "Fill the water bottle",
          time: "6:30-7:30",
          isOn: false,
        },
        {
          t_id: "yse34dsf3rsdf2",
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

  // user
  const [user, setUser] = useState({ userId: null });

  // component did mount
  useEffect(() => {
    // setting up the user
    getDeviceId()
      .then((id) => {
        setUser({ userId: id });
        console.log(id);
      })
      .catch((e) => console.log(e));

    // getting the routine info from the database
    const getData = async () => {
      const fetchedData = await DB().listDocuments(DBId, CollectionId, [
        Query.equal("userId", "d517861d49f69a95"),
      ]);
      return fetchedData;
    };

    getData()
      .then((data) => {
        setRoutineInfo(data.documents || []);
        console.log(data.documents);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <datalayer.Provider
      value={{
        routine: [routineInfo, setRoutineInfo],
        listItem: [isHold, setIsHold],
        popup: [popup, setPopup],
        form: [valid, setValid],
        user: [user, setUser],
        database: { DB, DBId, CollectionId },
      }}
    >
      {children}
    </datalayer.Provider>
  );
};

export default Context;
