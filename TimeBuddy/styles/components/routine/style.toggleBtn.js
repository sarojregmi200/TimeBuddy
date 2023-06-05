import { StyleSheet } from "react-native";

const innerCircleSize = 15;
const outerHeight = 25;

export default StyleSheet.create({
  outerContainer: {
    width: 50,
    height: outerHeight,
    borderWidth: 1,
    borderColor: "#D0D0D0",
    justifyContent: "center",
    borderRadius: innerCircleSize,
  },
  innerCircle: {
    width: innerCircleSize,
    height: innerCircleSize,
    borderRadius: innerCircleSize / 2,
    backgroundColor: "#D0D0D0",
    marginLeft: outerHeight / 2 - innerCircleSize / 2,
  },
  activeOuterContainer: {},
  activeInnerCircle: {},
});
