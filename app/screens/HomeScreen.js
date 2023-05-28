import { View, Text } from "react-native";
import React, { useContext } from "react";

// importing the context data layer
import { contextProvider } from "../context/Context";

// stylesheet
import styles from "../styles/HomeScreen.js";

const HomeScreen = () => {
  const data = useContext(contextProvider);

  return <View style={styles.container}></View>;
};

export default HomeScreen;
