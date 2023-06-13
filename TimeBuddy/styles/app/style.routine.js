import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: Dimensions.get("screen").width,
    paddingVertical: 50,
    backgroundColor: "white",
  },
  titleContainer: {
    width: Dimensions.get("screen").width,
    paddingHorizontal: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  IconContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  title: {
    color: "#48655F",
    fontSize: 30,
    fontFamily: "Poppins_600SemiBold",
  },
  routines: {
    marginTop: 10,
    zIndex: 20,
  },
});
