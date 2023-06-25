import { View, Text, Dimensions, Image } from "react-native";
import React, { useContext, useEffect, useState } from "react";

// styles
import styles from "../../styles/components/tasks/style.clock.js";

// context
import { datalayer } from "../../configurations/Context.js";

const Clock = () => {
  const {
    runningTasks: [task, setTask],
  } = useContext(datalayer);
  const [currentDashIndex, setCurrentDashIndex] = useState(0);

  // number of dash in the circle
  const numberOfDash = 50;

  // width of the device
  const deviceWidth = Dimensions.get("window").width;

  // center of the clock circle
  const center = deviceWidth / 2;

  // radius of the clock
  const radius = (deviceWidth - 50) / 2;

  // angle of seperation of each dash
  const angleIncrement = (2 * Math.PI) / numberOfDash;
  // contains all the dash postion with styles
  const dashes = [];

  for (let i = 1; i < numberOfDash; i++) {
    const angle = i * angleIncrement; // calculating the angle of the dash in the clock according to it's number

    //   x and y cord of the dash in the circle
    const x = center + radius * Math.cos(angle);
    const y = center + radius * Math.sin(angle);

    // Check if the dot is within the cut arc
    if (i <= 5 || i >= 45) {
      continue; // Skip drawing the dot within the cut arc
    }
    // each dash item with it's posistion and style according to it's index
    dashes.push({
      x,
      y,
      rotation: angle,
    });
  }

  useEffect(() => {
    setCurrentDashIndex(() => {
      const oneSec = 50 / task?.totalTime;

      console.log(task?.totalTime);
      const currentDash = oneSec * task.travelledTime;
      console.log({
        oneSec,
        currentDash,
      });
      return currentDash;
    });
  }, [task]);
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
                backgroundColor:
                  currentDashIndex <= count
                    ? "rgba(164, 83, 67, 0.13)"
                    : "rgba(92, 188, 168, 1)",
                transform: [{ rotate: dash?.rotation + "rad" }],
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
          opacity:
            dashes[currentDashIndex]?.y && dashes[currentDashIndex]?.x ? 1 : 0,
          top: dashes[currentDashIndex]?.y - 30 || 0,
          left: dashes[currentDashIndex]?.x - 30 || 0,
        }}
      />
    </View>
  );
};

export default Clock;
