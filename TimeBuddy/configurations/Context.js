import React, { createContext, useEffect, useState } from "react";

// creating the context provider
export const datalayer = createContext();

// moment to handle time
import moment from "moment";

// importing the appwrite configurations
import { DB, DBId, CollectionId, getDeviceId } from "./appwrite.config.js";
import { Query } from "appwrite";

// context data layer wrapper
const Context = ({ children }) => {
  // state to render the routine
  // contains the dummy sample data for now
  const [routineInfo, setRoutineInfo] = useState([]);

  // state that controls says whether the list is holded or touched when the list item is touched..
  const [isHold, setIsHold] = useState({ id: "none", state: false });

  // state to control the popup models
  const [popup, setPopup] = useState({ type: "Routine", state: false });
  // state that controls the validity of the creation
  const [valid, setValid] = useState(false);

  // user
  const [user, setUser] = useState({ userId: null });

  // state that contains the currently running tasks
  const [task, setTask] = useState();

  // seconds in one hour, and 1 min
  const SecondsInHour = 3600;
  const secondInMin = 60;

  // after data being updated to db
  const fetchDbData = () => {
    // setting up the user
    getDeviceId()
      .then((id) => {
        setUser({ userId: String(id) });

        // getting the routine info from the database
        getData(id)
          .then((data) => {
            setRoutineInfo(data.documents || []);
            extractCurrentTask(data.documents || []);
          })
          .catch((e) => console.log(e));
      })
      .catch((e) => console.log(e));

    // getting the routine info from the database
    const getData = async (id) => {
      const fetchedData = await DB().listDocuments(DBId, CollectionId, [
        Query.equal("userId", String(id)),
      ]);

      return fetchedData;
    };
  };

  // component did mount
  useEffect(() => {
    fetchDbData();
  }, []);

  // a function that accepts all the routines and then extracts the current task from the routine
  const extractCurrentTask = (routines) => {
    // all the tasks in the object form
    let tasks = [];
    // looping through all the routines
    routines.forEach((routine, index) => {
      // converting all the tasks in array and then pushing to the tasks array.
      tasks.push(...(JSON.parse(routine?.tasks) || []));
    });

    // filter outs the task that are off and keeping that are on
    tasks = tasks.filter((task) => {
      return task.isOn === true;
    });

    // current time in seconds
    const currentTimeInSeconds =
      new Date().getHours() * SecondsInHour +
      new Date().getMinutes() * secondInMin;

    // applying filter based on time and removing the task that have been complete
    tasks.forEach((task, index) => {
      // calculates and returns the starting and ending time of the task provided in seconds
      const taskTime = calculateTime(task, index); // object that contains starting and ending time of the task

      // removing all the task which have already ended

      // if current time is bigger it means the time has already past the end of the task and the task had to be completed in the past
      if (currentTimeInSeconds > taskTime.end) {
        tasks.pop(task); // remove the task from the array
      }
    });

    // applying bubble sort algorithm to find the task which is running or will run shortly.

    for (let i = 0; i < tasks.length; i++) {
      for (let j = i + 1; j < tasks.length; j++) {
        // getting the time of the task in seconds
        const currentTaskTime = calculateTime(tasks[i]);
        const nextTaskTime = calculateTime(tasks[j]);
        // moving the smaller time ahead in index and pushing the bigger time further
        // sorting in assending order
        console.log(currentTaskTime, nextTaskTime);
        if (currentTaskTime.start > nextTaskTime.start) {
          tasks[i] = tasks[j];
          tasks[j] = tasks[i];
        }
      }
    }

    // now, after all this sortings
    // first task in the tasks will contain the running task or the task that is near to running
    // updating the state on the basis of the status of the task i.e running or will run
    const shownTask = tasks[0]; // the task whose status will be shown
    const shownTaskTime = calculateTime(shownTask); // starting and ending time of the task to be shown
    setTask({
      isRunning: currentTimeInSeconds > shownTaskTime.start, // if true it means task is running or else it means task will be running
      travelledTime:
        shownTaskTime.end - shownTaskTime.start - currentTimeInSeconds, // time covered by the task from it's total time.
      totalTime: shownTaskTime.end - shownTaskTime.start, // total life time of the task
      remainingTime: shownTaskTime.end - currentTimeInSeconds, // remaining time for the task to be complete or to start
      data: shownTask, // the task that is running or will run
    });
  };

  const calculateTime = (task, index) => {
    try {
      // calculating the starting and the ending time of the provided task

      // starting time of the task
      const rawStartingTime = task.time?.first;
      const startingTimeInSeconds =
        parseInt(rawStartingTime.split(":")[0]) * SecondsInHour +
        parseInt(
          rawStartingTime
            .replace("PM", "")
            .replace("AM", "")
            .split(":")[1]
            .trim()
        ) *
          secondInMin;

      // ending time of the task
      const rawEndingTime = task.time?.second;
      const endingTimeInSeconds =
        parseInt(rawEndingTime.split(":")[0]) * SecondsInHour +
        parseInt(
          rawEndingTime.replace("PM", "").replace("AM", "").split(":")[1].trim()
        ) *
          secondInMin;

      return {
        start: startingTimeInSeconds,
        end: endingTimeInSeconds,
      };
    } catch (e) {
      console.log({
        e,
        index,
      });
    }
  };
  console.log(task);

  return (
    <datalayer.Provider
      value={{
        routine: [routineInfo, setRoutineInfo],
        runningTasks: [task, setTask],
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
