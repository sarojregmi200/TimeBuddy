import { View, Text, Dimensions, Pressable } from "react-native";
import React, { useContext } from "react";

// context
import { datalayer } from "../../configurations/Context";

//  controls the state of the popup
const Disposer = () => {
  // contains the info about the popup state
  const {
    popup: [, setPopup],
  } = useContext(datalayer);

  // closes the popup and clears the state value.
  const handleDispose = () => {
    setPopup({ type: "none", state: false });
  };

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
      onPress={handleDispose}
    ></Pressable>
  );
};

export default Disposer;
