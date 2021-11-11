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
  // TODO: refactor this, right now it's duplicated in three files (home, search and here)
  card: {
    flex: 1,
    display: "flex",
    width: config.deviceWidth * 0.4,
    marginLeft: config.deviceWidth * 0.05,
    height: config.deviceWidth * 0.4,
    marginTop: 15,
    borderRadius: 23,
  },
  empty: {
    flex: 1,
    display: "flex",
    width: config.deviceWidth * 0.4,
    marginLeft: config.deviceWidth * 0.05,
    height: config.deviceWidth * 0.4,
    marginTop: 15,
    borderRadius: 23,
    backgroundColor: colors.lightGray,
  },
  star: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    bottom: 1,
    alignSelf: "center",
    width: config.deviceWidth * 0.35,
    height: 70,
  },
  name: {
    fontFamily: "Inter_700Bold",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 22,
    color: colors.white,
    marginBottom: 5,
  },
  chip: {
    backgroundColor: colors.white,
    marginRight: 5,
    borderRadius: 8,
  },
  chipText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 6,
    height: 10,
  },
  chipBox: {
    display: "flex",
    flexDirection: "row",
  },
  image: {
    width: undefined,
    height: "100%",
    overflow: "hidden",
    borderRadius: 23,
  },
});
