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
  },
  leftSection: {
    flex: 1,
  },
  title: {
    color: "#545454",
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
  },
  inactiveTitle: {
    color: "#A5A5A5",
  },
});
