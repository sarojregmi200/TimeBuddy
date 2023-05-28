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
        {/* The illustaration above all other things */}
        <Image
          style={styles.illustartion}
          source={require("../assets/Graphics/Images/illustration.png")}
        />

        {/* The middle texts */}
        <View style={styles.txtContent}>
          <Text style={styles.title}>Master Your Time</Text>
          <Text style={styles.description}>
            Let you buddy remember what you have to do
          </Text>
        </View>

        {/* create new button  */}
      </View>
      {/* navigation */}
    </View>
  );
};

export default HomeScreen;
