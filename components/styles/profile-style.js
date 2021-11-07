import { StyleSheet } from "react-native";
import colors from "../colors";
import config from "../config";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  top: {
    backgroundColor: colors.darkGray,
    width: config.deviceWidth,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    borderRadius: 99,
  },
});
