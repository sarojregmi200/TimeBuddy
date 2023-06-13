import { View, Text, Dimensions, Pressable } from "react-native";
import React from "react";

const Disposer = () => {
  return (
    <Pressable
      style={{
        height: Dimensions.get("screen").height,
        width: Dimensions.get("screen").width,
        backgroundColor: "rgba(55, 55, 55, 0.26)",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 20,
      }}
    ></Pressable>
  );
};

export default Disposer;
