import { View, Text, Dimensions, Image } from "react-native";
import React, { useEffect, useState } from "react";

// styles
import styles from "../../styles/components/tasks/style.clock.js";

// moment
import moment from "moment";

const Clock = () => {
  const numberOfDash = 50;

  const deviceWidth = Dimensions.get("window").width;

  const center = deviceWidth / 2;
  const radius = (deviceWidth - 50) / 2;
  const angleIncrement = (2 * Math.PI) / numberOfDash;
  const dashes = [];

  for (let i = 1; i < numberOfDash; i++) {
    const angle = i * angleIncrement;
    //   console.log({ i, angle });
    const x = center + radius * Math.cos(angle);
    const y = center + radius * Math.sin(angle);

    // Check if the dot is within the cut arc
    if (i <= 5 || i >= 45) {
      continue; // Skip drawing the dot within the cut arc
    }
    dashes.push({
      x,
      y,
      background: "rgba(92, 188, 168, 1)",
    });
  }
  return (
    <View style={styles.strokeContainer}>
      {dashes.map((dash, count) => {
        return (
          <View
            style={[
              styles.circleBorderDash,
              {
                top: dash?.y,
                left: dash?.x,
                backgroundColor: dash?.background,
              },
            ]}
            key={count}
          ></View>
        );
      })}

      <Image
        source={require("../../assets/currentTimeStroke.png")}
        style={{
          position: "absolute",
          top: dashes[20].y - 30,
          left: dashes[20].x - 30,
        }}
      />
      {console.log("********************************************")}
    </View>
  );
};

export default Clock;
