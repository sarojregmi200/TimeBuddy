import { View, Text, Dimensions } from "react-native";
import React from "react";

// styles
import styles from "../../components/routine/style.deleteBtn.js";

// ui elements
import { BoxShadow, Canvas, Circle, Shadow } from "@shopify/react-native-skia";

const DeleteBtn = ({ state }) => {
  const r = 30;
  const canvasSize = 150;
  return (
    <Canvas
      style={{
        width: canvasSize,
        height: canvasSize,
        top: Dimensions.get("screen").height - 270,
        left: Dimensions.get("screen").width / 2 - canvasSize / 2,
        position: "absolute",
      }}
    >
      <Circle r={30} cx={canvasSize / 2} cy={canvasSize / 2} color="white" />
      <Shadow color={"rgba(245, 138, 47, 0.44)"} dx={0} dy={0} blur={20} />
    </Canvas>
  );
};

export default DeleteBtn;
