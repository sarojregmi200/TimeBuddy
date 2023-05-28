import { Text, Pressable, StyleSheet } from "react-native";
import React from "react";

const Button = ({ txt, customStyles, clickEvent }) => {
  const styles = StyleSheet.create({
    button: {},
    txt: {},
    ...{ customStyles },
  });

  // using the on press function from the prop
  const handlePress = clickEvent();

  return (
    <Pressable
      onPress={handlePress}
      style={[styles.button, { backgroundColor: background }]}
    >
      <Text style={styles.txt}>{txt}</Text>
    </Pressable>
  );
};

export default Button;
