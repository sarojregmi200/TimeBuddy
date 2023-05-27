import { Text, Pressable, StyleSheet } from "react-native";
import React from "react";

const Button = ({ background, clickEvent }) => {
  // using the on press function from the prop
  const handlePress = clickEvent();

  return (
    <Pressable
      onPress={handlePress}
      style={[styles.button, { backgroundColor: background }]}
    >
      <Text>Button</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {},
});

export default Button;
