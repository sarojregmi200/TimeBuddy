import { View, Text } from "react-native";
import React from "react";

import styles from "../../styles/components/routine/style.days.js";
const Days = ({ data }) => {
  const days = ["M", "T", "W", "T", "F", "S", "S"];

  const activeStyle = (toCheck, consumer) =>
    data[toCheck]
      ? consumer === "container"
        ? styles.activeDayContainer
        : styles.activeDayTxt
      : null;
  return (
    <View style={styles.daysContainer}>
      {days.map((day, index) => {
        return (
          <View
            style={[
              styles.dayContainer,
              index > 0 && styles.notFirstTxtCon,
              activeStyle(index, "container"),
            ]}
            key={index}
          >
            <Text style={[styles.dayTxt, activeStyle(index, "txt")]}>
              {day}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default Days;
