import { View, Text, Pressable, ScrollView } from "react-native";
import React, { useContext, useEffect } from "react";

// stylesheet
import styles from "../../styles/app/style.routine.js";

// to get the routine data
import { datalayer } from "../../configurations/Context.js";

// components
import ListItem from "../../components/global/ListItem.jsx";
import RunningTask from "../../components/running task/RunningTask.js";

//icons
import Add from "../../assets/svgs/Add.svg";

const Routine = ({}) => {
  const {
    routine: [routineInfo],
    popup: [, setPopup],
  } = useContext(datalayer);

  const handleAddRoutine = () => {
    setPopup({ type: "Routine", state: true });
  };

  return (
    <ScrollView>
      <RunningTask />
      <View style={styles.mainContainer}>
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
          {routineInfo?.length > 0 &&
            routineInfo.map((routine, index) => (
              <ListItem
                data={routine}
                type={"Routine"}
                key={index}
                ind={index}
              />
            ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Routine;
