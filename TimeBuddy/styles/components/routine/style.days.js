import { Dimensions, StyleSheet } from "react-native";

// to make the days responsive
const optimalSize = (Dimensions.get("screen").width - 230) / 7;

console.log(optimalSize);
export default StyleSheet.create({
  daysContainer: {
    flexDirection: "row",
    width: "100%",
    marginTop: 10,
  },
  dayContainer: {
    backgroundColor: "#F2F2F2",
    justifyContent: "center",
    alignItems: "center",
    height: optimalSize,
    width: optimalSize,
    borderRadius: 2,
  },
  dayTxt: {
    color: "#727272",
    fontFamily: "Poppins_600SemiBold",
    fontSize: optimalSize / 2,
    textAlign: "center",
  },
  activeDayContainer: {
    backgroundColor: "#F58A2F",
  },
  activeDayTxt: { color: "white" },
  notFirstTxtCon: {
    marginLeft: 10,
  },
});
