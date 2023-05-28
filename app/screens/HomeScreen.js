import { View, Text, Image } from "react-native";
import React, { useContext } from "react";

// importing the context data layer
import { contextProvider } from "../context/Context";

// stylesheet
import styles from "../styles/HomeScreen.js";

const HomeScreen = () => {
  const data = useContext(contextProvider);

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Image style={styles.illustartion} />
        <View style={styles.txtContent}>
          <Text style={styles.title}>Master Your Time</Text>
          <Text style={styles.description}>
            Let you buddy remember what you have to do
          </Text>
        </View>
      </View>
      {/* navigation */}
    </View>
  );
};

export default HomeScreen;
