import { View, Text, Pressable } from "react-native";
import React from "react";

// stylesheet
import styles from "../../styles/components/routine/style.toggleBtn.js";
const ToggleBtn = ({ controls: [toggleBtn, setToggleBtn] }) => {
  const handleToggle = () => {
    setToggleBtn(!toggleBtn);
  };

  return (
    <Pressable
      onPress={handleToggle}
      style={[styles.outerContainer, toggleBtn && styles.activeOuterContainer]}
    >
      <View
        style={[styles.innerCircle, toggleBtn && styles.activeInnerCircle]}
      ></View>
    </Pressable>
  );
};

export default ToggleBtn;
