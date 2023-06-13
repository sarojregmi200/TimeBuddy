import { View, Text, Pressable } from "react-native";
import React, { useContext, useEffect } from "react";

// stylesheet
import styles from "../styles/app/style.routine.js";

// to get the routine data
import { datalayer } from "../configurations/Context.js";

// components
import ListItem from "../components/global/ListItem.jsx";
import DeleteBtn from "../components/routine/DeleteBtn.jsx";

//icons
import Add from "../assets/svgs/Add.svg";

const Routine = ({}) => {
  const {
    routine: [routineInfo],
    popup: [, setPopup],
  } = useContext(datalayer);

  const handleAddRoutine = () => {
    setPopup({ type: "Routine", state: true });
  };

  return (
    <>
      <View style={styles.mainContainer}>
        <DeleteBtn />
        {/* title with add icon*/}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Routines</Text>
          {/*  add icon */}
          <Pressable style={styles.IconContainer} onPress={handleAddRoutine}>
            <Add />
          </Pressable>
        </View>
        <View style={[styles.routines]}>
          {/* list items */}
          {routineInfo.map((routine, index) => (
            <ListItem data={routine} type={"Routine"} key={index} />
          ))}
        </View>
      </View>
    </>
  );
};

export default Routine;
