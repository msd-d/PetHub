import { StyleSheet } from "react-native";
import colors from "../colors";
import config from "../config";

export default StyleSheet.create({
  outerWall: {
    margin: config.deviceHeight / 64,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: config.deviceHeight / 32,
    color: colors.pethubPink,
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
