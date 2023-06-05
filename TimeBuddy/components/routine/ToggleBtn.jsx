import { View, Text, Pressable } from "react-native";
import React from "react";

// stylesheet
import styles from "../../styles/components/routine/style.toggleBtn.js";
const ToggleBtn = () => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerCircle}></View>
    </View>
  );
};

export default ToggleBtn;
