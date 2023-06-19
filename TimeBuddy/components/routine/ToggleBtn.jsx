import { View, Text, Pressable } from "react-native";
import React, { useContext } from "react";

// stylesheet
import styles from "../../styles/components/routine/style.toggleBtn.js";

// to update the routine data on change
import { datalayer } from "../../configurations/Context.js";
// to update the database
import { updateDb } from "../../configurations/appwrite.config.js";

const ToggleBtn = ({ controls: [toggleBtn, setToggleBtn], routineId }) => {
  // function to change routine info data
  const {
    routine: [routineInfo, setRoutineInfo],
  } = useContext(datalayer);

  const handleToggle = () => {
    setToggleBtn(!toggleBtn);
    setRoutineInfo((routineArr) => {
      return routineArr.map((routine) => {
        // if the given id is a routine id
        if (routine.r_id === routineId) {
          // changing the toggle btn
          const updatedRoutine = {
            ...routine,
            isOn: !toggleBtn,
          };
          // reflecting the state change in the db
          updateDb(routine?.$id, updatedRoutine);
          return { ...routine, isOn: !toggleBtn };
        } else {
          // if not it is a task id

          return routine;
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
