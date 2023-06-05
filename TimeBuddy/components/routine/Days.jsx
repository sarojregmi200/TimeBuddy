import { View, Text } from "react-native";
import React from "react";

import styles from "../../styles/components/routine/style.days.js";
const Days = ({ data }) => {
  const days = ["M", "T", "W", "T", "F", "S", "S"];

  return (
    <View style={styles.daysContainer}>
      {days.map((day, index) => {
        return (
          <View
            style={[styles.dayContainer, index > 0 && styles.notFirstTxtCon]}
            key={index}
          >
            <Text style={styles.dayTxt}>{days[index]}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default Days;
