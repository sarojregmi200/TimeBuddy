import { StyleSheet } from "react-native";

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
    height: 30,
    width: 30,
    borderRadius: 2,
  },
  dayTxt: {
    color: "#727272",
    fontFamily: "Poppins_600SemiBold",
    fontSize: 15,
  },
  activeDayContainer: {
    backgroundColor: "#F58A2F",
  },
  activeDayTxt: { color: "white" },
  notFirstTxtCon: {
    marginLeft: 10,
  },
});
