import { Dimensions, StyleSheet } from "react-native";

const horizontalPadding = 100;
export default StyleSheet.create({
  activeIcon: {},
  activeTxt: { color: "rgba(255, 154, 98, 1)", display: "flex" },
  mainContainer: {
    flexDirection: "row",
    height: 100,
    position: "absolute",
    width: Dimensions.get("screen").width,
    left: 0,
    bottom: 0,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: horizontalPadding,
  },
  homeContainer: {},
  routineContainer: {},
  profileContainer: {},
  navTxt: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 12,
    color: "rgba(106, 106, 106, 0.53)",
    // display: "none",
  },
});
