import { View, Text, Dimensions } from "react-native";
import React from "react";

const Clock = () => {
  const deviceWidth = Dimensions.get("screen").width;
  const radius = deviceWidth / 2 - 25; // 25 beacuse the title has a padding of 25 as well

  return <></>;
};

export default Clock;
