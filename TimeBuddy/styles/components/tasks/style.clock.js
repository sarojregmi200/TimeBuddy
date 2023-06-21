import { Dimensions, StyleSheet } from "react-native";

const clockWidth = Dimensions.get("screen").width;

export default StyleSheet.create({
  circleBorderDash: {
    backgroundColor: "rgba(164, 83, 67, 0.33)",
    height: 6,
    width: 4,
    borderRadius: 3,
    position: "absolute",
    marginLeft: 25,
  },

  strokeContainer: {
    width: clockWidth,
    height: clockWidth,
    position: "relative",
    // justifyContent: "center",
    // alignItems: "center",
  },
});
