import { StyleSheet } from "react-native";
import colors from "../colors";
import config from "../config";

export default StyleSheet.create({
  header: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    backgroundColor: colors.lightGray,
    borderRadius: 8,
    width: config.deviceWidth * 0.8,
    margin: 5,
    padding: 10,
  },
  loginButton: {
    width: config.deviceWidth * 0.5,
    borderRadius: 99,
  },
  pressableText: {
    margin: 10,
    color: colors.pethubPink,
  },
});
