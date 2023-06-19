import { View, Text, Pressable } from "react-native";
import React, { useContext } from "react";

// stylesheet
import styles from "../../styles/components/routine/style.toggleBtn.js";

// to update the routine data on change
import { datalayer } from "../../configurations/Context.js";
// to update the database
import { updateDb } from "../../configurations/appwrite.config.js";

const ToggleBtn = ({
  controls: [toggleBtn, setToggleBtn],
  routineId,
  type,
  taskId = false,
}) => {
  // function to change routine info data
  const {
    routine: [, setRoutineInfo],
  } = useContext(datalayer);

  const handleToggle = () => {
    setToggleBtn(!toggleBtn);
    setRoutineInfo((routineArr) => {
      return routineArr.map((routine) => {
        // if the given id and the routine id doesnot match it is not a valid entry so the inital state is returned
        if (routine.r_id !== routineId) return routine;

        if (type === "Routine") {
          // changing the toggle btn
          const updatedRoutine = {
            ...routine,
            isOn: !toggleBtn,
          };
          // reflecting the state change in the db
          updateDb(routine?.$id, updatedRoutine);
          return { ...routine, isOn: !toggleBtn };
        } else {
          // it means it is a task that is being updated

          // parsing the tasks into a array
          const tasksArray = JSON.parse(routine?.tasks);
          // // updating the task
          tasksArray.map((task) => {
            if (task.t_id === taskId) {
              task.isOn = !toggleBtn;
            }
            return task;
          });
          const updatedRoutine = {
            ...routine,
            tasks: JSON.stringify(tasksArray),
          };

          // reflecting the state change in the db
          updateDb(routine?.$id, updatedRoutine);
          // setting the state
          return { ...updatedRoutine };
        }
      });
    });
  };

  return (
    <Pressable
      onPress={handleToggle}
      style={[styles.outerContainer, toggleBtn && styles.activeOuterContainer]}
    >
      <View
        style={[styles.innerCircle, toggleBtn && styles.activeInnerCircle]}
      ></View>
    </Pressable>
  );
};

export default ToggleBtn;
