import { View, Text, Image } from "react-native";
import React from "react";

// style for the homescreen
import styles from "../styles/style.home.js";

const HomeScreen = () => {
  return (
    <>
      {/* home main screen */}
      <View style={styles.mainContainer}>
        <Image source={require("../assets/monk.png")} style={styles.monk} />
        {/* illustration */}
        {/* text */}
        <Text style={styles.title}></Text>
        {/* button */}
      </View>

      {/* Tab navigation */}
    </>
  );
};

export default HomeScreen;
