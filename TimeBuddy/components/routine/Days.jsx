import { View, Text, Pressable } from "react-native";
import React from "react";

import styles from "../../styles/components/routine/style.days.js";
const Days = ({ data, status, creation }) => {
  // @params
  // data = days active and inactive list such as:
  // type :array
  // eg: [0,1,1,0,1,1,0]
  // status to see if the routine is active or not.
  // type :boolean
  // creation : boolean states that if the routine is
  //            being created or not.

  const days = ["M", "T", "W", "T", "F", "S", "S"];

  const activeStyle = (toCheck, consumer) =>
    data[toCheck]
      ? consumer === "container"
        ? status
          ? styles.activeDayContainer
          : // toggle btn is off but day is in the repeat
            styles.offActiveDayContainer
        : styles.activeDayTxt
      : consumer === "txt" && !status && styles.offInactiveDayText;

  const handleClick = () => {};
  return (
    <View style={styles.daysContainer}>
      {days.map((day, index) => {
        return (
          <Pressable
            style={[
              styles.dayContainer,
              index > 0 && styles.notFirstTxtCon,
              activeStyle(index, "container"),

              // to change the size of the container when creating routine
              creation && styles.creatorModeCon,
            ]}
            key={index}
            onPress={() => creation && handleClick()}
          >
            <Text
              style={[
                styles.dayTxt,
                activeStyle(index, "txt"),
                // to change the size of the txt when creating routine
                creation && styles.creatorModeTxt,
              ]}
            >
              {day}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default Days;
