import { View, Text, Dimensions } from "react-native";
import React from "react";

// styles
import styles from "../../styles/components/tasks/style.clock.js";

const Clock = () => {
  // individual dash dimension
  const strokeDimensions = {
    height: 5,
    width: 4,
  };
  const deviceWidth = Dimensions.get("screen").width;

  // indicates the number of dashes in the circle
  const numberOfStroke = deviceWidth / 5;

  const minDeg = 60;

  const getUniqueDashStyle = (number) => {
    const center = { h: (deviceWidth - 50) / 2, k: (deviceWidth - 50) / 2 };
    const radius = (deviceWidth - 50) / 2; // -80 due to 40px padding in each sides
    let thetaDegree = 0; // 180 since it is a semicircle

    const cord = {
      x: center.h + radius * Math.cos((2 * Math.PI * number) / numberOfStroke),
      y: center.k + radius * Math.sin((2 * Math.PI * number) / numberOfStroke),
    };
    if (cord.y == minDeg) {
      // items remaining to be printed
      const remainingCount = numberOfStroke - number;

      thetaDegree = (290 / remainingCount) * number;
    }
    return {
      bottom: cord.y || 0,
      left: cord.x,
      // transform: [{ rotate:  }],
      transform: [{ rotate: thetaDegree + "deg" }],
      display: cord.y < minDeg ? "none" : "flex",
    };
  };
  return (
    <View style={styles.strokeContainer}>
      {Array(numberOfStroke)
        .fill("x")
        .map((_, count) => {
          return (
            <View
              style={[styles.circleBorderDash, getUniqueDashStyle(count)]}
              key={count}
            ></View>
          );
        })}
      {console.log("****************")}
    </View>
  );
};

export default Clock;
