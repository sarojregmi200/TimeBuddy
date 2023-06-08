import { View, Text, Dimensions } from "react-native";
import React, { useContext } from "react";

// styles
import styles from "../../components/routine/style.deleteBtn.js";

// ui elements
import { Canvas, Circle, Shadow } from "@shopify/react-native-skia";
import { datalayer } from "../../configurations/Context.js";

const DeleteBtn = () => {
  const r = 30;
  const canvasSize = 150;
  const {
    listItem: [isHold],
  } = useContext(datalayer);
  return (
    <Canvas
      style={{
        width: canvasSize,
        height: canvasSize,
        top: Dimensions.get("screen").height - 270,
        left: Dimensions.get("screen").width / 2 - canvasSize / 2,
        position: "absolute",
        zIndex: 9,
      }}
    >
      {isHold.state && (
        <Circle r={r} cx={canvasSize / 2} cy={canvasSize / 2} color="white" />
      )}
      <Shadow color={"rgba(245, 138, 47, 0.44)"} dx={0} dy={0} blur={20} />
    </Canvas>
  );
};

export default DeleteBtn;
