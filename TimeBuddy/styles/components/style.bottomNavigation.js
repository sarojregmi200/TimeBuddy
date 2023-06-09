import { Dimensions, StyleSheet } from "react-native";

const horizontalPadding = 100;
export default StyleSheet.create({
  activeIcon: {},
  activeTxt: {
    color: "rgba(255, 154, 98, 1)",
    display: "flex",
    textAlign: "center",
  },
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
  routineContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  profileContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  homeContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  navTxt: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 12,
    display: "none",
    marginTop: 4,
  },
});
