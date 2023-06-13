import { View, Text, Pressable } from "react-native";
import React from "react";

const Button = ({ data, style, handleEvent }) => {
  return (
    <Pressable
      onPress={handleEvent}
      style={[{ ...style.body }, { ...style?.visibility }]}
    >
      <Text style={{ ...style.txt }}>{data.txt}</Text>
    </Pressable>
  );
};

export default Button;
