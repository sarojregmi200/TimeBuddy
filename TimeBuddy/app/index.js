import { View, Text, Image } from "react-native";
import React, { useContext } from "react";

// style for the homescreen
import styles from "../styles/style.home.js";
import Button from "../components/global/Button.jsx";

// context api layer
import { datalayer } from "../configurations/Context.js";

const HomeScreen = () => {
  // data from the data layer
  const data = useContext(datalayer);

  return (
    <View style={styles.mainContainer}>
      {/* illustration */}
      <Image source={require("../assets/monk.png")} style={styles.monk} />
      {/* text content*/}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Master Your Time</Text>
        <Text style={styles.para}>
          let your buddy remember{"\n"}
          what you have to do.
        </Text>
      </View>
      {/* button */}
      <Button
        data={{ txt: "Create Routine" }}
        style={{ body: styles.buttonBody, txt: styles.buttonTxt }}
      />
    </View>
  );
};

export default HomeScreen;
