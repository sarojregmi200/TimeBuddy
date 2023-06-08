import { View, Text } from "react-native";
import React, { useContext, useEffect } from "react";

// stylesheet
import styles from "../styles/app/style.routine.js";

// to get the routine data
import { datalayer } from "../configurations/Context.js";

// components
import ListItem from "../components/global/ListItem.jsx";
import DeleteBtn from "../components/routine/DeleteBtn.jsx";

const Routine = ({}) => {
  const {
    routine: [routineInfo],
  } = useContext(datalayer);

  return (
    <>
      <View style={styles.mainContainer}>
        {/* title with add icon*/}
        <Text style={styles.titleContainer}>
          <Text style={styles.title}>Routines</Text>
          {/*  add icon */}
        </Text>

        <View style={styles.routines}>
          {/* list items */}
          {routineInfo.map((routine, index) => (
            <ListItem data={routine} type={"Routine"} key={index} />
          ))}
        </View>
      </View>
      <DeleteBtn />
    </>
  );
};

export default Routine;
