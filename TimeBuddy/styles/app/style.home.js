import { StyleSheet } from "react-native";

const sectionMargin = 40;

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 28,
    color: "#48655F",
  },
  textContainer: {
    marginTop: sectionMargin,
  },
  para: {
    textAlign: "center",
    fontSize: 14,
    color: "#727272",
    marginTop: 10,
  },

  buttonBody: {
    backgroundColor: "#5CBCA8",
    width: 270,
    height: 62,
    justifyContent: "center",
    alignItems: "center",
    marginTop: sectionMargin,
    borderRadius: 20,
  },
  buttonTxt: {
    color: "white",
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
  },
});
