import { Dimensions, StyleSheet } from "react-native";

// to make the days responsive
const optimalSize = (Dimensions.get("screen").width - 230) / 7;

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

  notFirstTxtCon: {
    marginLeft: 10,
  },

  //  when the toggle btn is on
  activeDayContainer: {
    backgroundColor: "#F58A2F",
  },
  activeDayTxt: { color: "white" },

  // when the toogle btn is off but the day is active
  offActiveDayContainer: {
    backgroundColor: "rgba(245, 138, 47, 0.5)",
  },
  offInactiveDayText: {
    color: "rgba(114, 114, 114, 0.5)",
  },
});
