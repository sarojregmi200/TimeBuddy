import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  mainContainer: {
    zIndex: 21, // since the disposer has 20 and everything is than 20
    position: "absolute",
    bottom: 0,
    left: 0,
    height: 500,
    width: Dimensions.get("window").width,
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 40,
  },
  routineContainer: {},
  taskContainer: {},
  maximizer: {
    height: 4,
    width: 100,
    backgroundColor: "#D9D9D9",
    marginLeft: "auto",
    marginRight: "auto",
  },

  formContents: {
    height: "100%",
    width: "100%",
  },
  nameContainer: {
    marginVertical: 40,
  },
  label: {
    fontFamily: "Inter_500Medium",
    fontSize: 12,
    color: "#545454",
    marginBottom: 10,
  },
  nameInputBox: {
    fontFamily: "Inter_500Medium",
    fontSize: 14,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    height: 50,
    padding: 17,
    borderRadius: 8,
  },
  btnBody: {
    width: 250,
    height: 60,
    backgroundColor: "#5CBCA8",
    borderRadius: 19,
    marginTop: 40,
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // opacity: valid ? 1 : 0.5,
  },
  btnTxt: {
    color: "white",
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
  },
});
