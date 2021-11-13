import { StyleSheet } from "react-native";
import colors from "../colors";
import config from "../config";

export default StyleSheet.create({
  selectToggle: {
    backgroundColor: colors.lightGray,
    borderRadius: 12,
    padding: 10,
    marginHorizontal: config.deviceWidth * 0.05,
  },
  selectToggleText: {
    fontFamily: "Inter_700Bold",
    fontWeight: "bold",
    color: colors.gray,
  },
  button: {
    backgroundColor: colors.pethubPink,
  },
  subItemText: {
    fontFamily: "Inter_700Bold",
    fontWeight: "bold",
  },
  itemText: {
    fontFamily: "Inter_700Bold",
    fontWeight: "bold",
    fontSize: 16,
  },
  chipContainer: {
    borderWidth: 1,
    backgroundColor: colors.lightGray,
  },
  chipsWrapper: {
    marginHorizontal: config.deviceWidth * 0.05,
  },
});
