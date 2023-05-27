import { View, Text } from "react-native";
import React, { useContext } from "react";

// importing the context data layer
import { contextProvider } from "../context/Context";

const HomeScreen = () => {
  const data = useContext(contextProvider);
  console.log(data);

  return <View></View>;
};

export default HomeScreen;
