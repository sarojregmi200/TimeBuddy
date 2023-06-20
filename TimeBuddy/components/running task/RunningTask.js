import { View, Text } from "react-native";
import React from "react";

// styles
import styles from "../../styles/components/tasks/style.runningtask.js";

// components
import Clock from "./Clock.jsx";

const RunningTask = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Running tasks</Text>
      <Clock />
    </View>
  );
};

export default RunningTask;
