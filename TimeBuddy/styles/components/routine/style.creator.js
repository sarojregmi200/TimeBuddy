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
});
