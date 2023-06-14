import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    height: Dimensions.get("screen").height,
    width: Dimensions.get("screen").width,
    paddingBottom: 100,
  },
  topContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 40,
    paddingHorizontal: 25,
    justifyContent: "space-between",
    marginTop: 20,
  },
  title: {
    color: "#48655F",
    fontSize: 20,
    fontFamily: "Poppins_600SemiBold",
  },
  tasksContainer: {
    height: Dimensions.get("screen").height,
  },
});
