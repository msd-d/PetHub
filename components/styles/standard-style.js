import { StyleSheet } from "react-native";
import colors from "../colors";
import config from "../config";

export default StyleSheet.create({
  container: {},
  buttonTextBold: {
    color: colors.darkGray,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
  },
  genderButton: {
    borderRadius: 20,
    backgroundColor: colors.pethubPink,
  },
  genderBorder: {
    color: colors.transparent,
    width: config.deviceWidth * 0.03,
  },
  genderButtonDisabled: {
    borderRadius: 20,
    backgroundColor: colors.lightGray,
  },
  genderContainer: {
    marginHorizontal: config.deviceWidth * 0.05,
    borderRadius: 20,
    borderWidth: 0,
  },
});
