import { View, Text } from "react-native";
import React from "react";

// stylesheet
import styles from "../../styles/components/routine/style.creator.js";

// used to dispose the popup i mean close the popup
import Disposer from "./Disposer.jsx";

const Creator = () => {
  const type = "Routine";
  // type indicates the type of creator
  // either routine creator or task creator.
  return (
    <>
      <Disposer />
      <View
        style={[
          type == "Routine" ? styles.routineContainer : styles.taskContainer,
          styles.mainContainer,
        ]}
      ></View>
    </>
  );
};

export default Creator;
