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
    marginTop: 5,
    width: config.deviceWidth,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  row: {
    width: config.deviceWidth,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  infoView: {
    
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
    flexGrow: 1,
  },
  postingsView: {
    backgroundColor: colors.lightGray,
    marginTop: 30,
    width: config.deviceWidth,
  },
  button: {
    borderRadius: 99,
  },
});
