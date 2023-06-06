import { View, Text, Pressable } from "react-native";
import React, { useContext } from "react";

// stylesheet
import styles from "../../styles/components/routine/style.toggleBtn.js";

// to update the routine data on change
import { datalayer } from "../../configurations/Context.js";

const ToggleBtn = ({ controls: [toggleBtn, setToggleBtn], routineId }) => {
  // function to change routine info data
  const {
    Routine: [, setRoutineInfo],
  } = useContext(datalayer);

  const handleToggle = () => {
    setToggleBtn(!toggleBtn);

    setRoutineInfo((routineArr) => {
      return routineArr.map((routine) => {
        if (routine._id === routineId) return { ...routine, isOn: !toggleBtn };
        return routine;
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
