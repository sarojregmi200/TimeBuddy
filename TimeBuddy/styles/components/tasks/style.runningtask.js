import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    width: Dimensions.get("screen").width,
    paddingVertical: 50,
    backgroundColor: "white",
  },
  title: {
    color: "#48655F",
    fontSize: 30,
    paddingHorizontal: 25,
    fontFamily: "Poppins_600SemiBold",
  },
});
