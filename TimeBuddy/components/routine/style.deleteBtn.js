import { Dimensions, StyleSheet } from "react-native";

const btnSize = 60;

export default StyleSheet.create({
  deleteBtnContainer: {
    height: btnSize,
    width: btnSize,
    borderRadius: btnSize / 2,
    position: "absolute",
    top: Dimensions.get("screen").height - 200,
    backgroundColor: "#e8e8e8",
    left: Dimensions.get("screen").width / 2 - btnSize / 2,
  },
});
