import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  itemContainer: {
    width: Dimensions.get("screen").width,
    height: 115,
    alignItems: "center",
    flexDirection: "row",
    borderBottomColor: "#E0EFEC",
    borderBottomWidth: 1,
    paddingHorizontal: 25,
    backgroundColor: "white",
    zIndex: 10,
    justifyContent: "space-between",
  },
  leftSection: {
    // flex: 1,
  },
  title: {
    color: "#545454",
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
  },
  inactiveTitle: {
    color: "#A5A5A5",
  },
  date: {
    color: "#545454",
    fontFamily: "Poppins_500Medium",
    fontSize: 14,
  },
});
