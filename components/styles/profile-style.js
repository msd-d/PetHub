import { StyleSheet } from "react-native";
import colors from "../colors";
import config from "../config";

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  top: {
    width: config.deviceWidth,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  row: {
    width: config.deviceWidth,
    flexDirection: "row",
    justifyContent: "flex-start",

  },
  infoView: {
    marginLeft: 20,
  }, 
  profilePicture: {
    alignItems: "center",
  },
  usernameText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  infoText: {
    backgroundColor: colors.lightGray,
    margin: 5,
    padding: 10,
    borderRadius: 99,
  },
  button: {
    borderRadius: 99,
  },
});
