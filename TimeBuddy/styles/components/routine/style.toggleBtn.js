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

    // since the height and width of the inner ball is the same so, the middle point both vertically and horizontally is the same
    // the margin left is to be calculated same as the margin top, and margin top comes from justifyContent: "center",
    // justifycontent aligns the content in the center which is equal to the height /2 but the item i.e inner circle has a heigh with is equal to the innerCircleSize so it's centere is also added so it is. innerCircleSize + x height = absolute center = outerHeight / 2
    // so the final margin left is equal to the eqn below.
    marginLeft: outerHeight / 2 - innerCircleSize / 2,
  },
  activeOuterContainer: {
    borderColor: "#5CBCA8",
  },
  activeInnerCircle: {
    backgroundColor: "#5CBCA8",
    marginLeft: "auto",
    marginRight: outerHeight / 2 - innerCircleSize / 2,
  },
});
