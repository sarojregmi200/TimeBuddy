import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: Dimensions.get("screen").width,
    paddingHorizontal: 25,
    paddingVertical: 50,
  },
  titleContainer: {
    width: Dimensions.get("screen").width,
    justifyContent: "space-between",
  },
  title: {
    color: "#48655F",
    fontSize: 30,
    fontFamily: "Poppins_600SemiBold",
  },
  routines: {
    marginTop: 30,
  },
});
