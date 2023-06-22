import { Dimensions, StyleSheet } from "react-native";

const clockWidth = Dimensions.get("screen").width;

export default StyleSheet.create({
  circleBorderDash: {
    backgroundColor: "rgba(164, 83, 67, 0.33)",
    height: 4,
    width: 6,
    borderRadius: 3,
    position: "absolute",
  },

  strokeContainer: {
    width: clockWidth,
    height: clockWidth,
    position: "relative",
    transform: [{ rotate: "90deg" }],
    justifyContent: "center",
    alignItems: "center",
    borderRadius: clockWidth / 2,
  },
});
