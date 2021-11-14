import { StyleSheet } from "react-native";
import config from "../config";
import colors from "../colors";

export default StyleSheet.create({
  card: {
    flex: 1,
    display: "flex",
    width: config.deviceWidth * 0.9,
    marginLeft: config.deviceWidth * 0.05,
    height: config.deviceWidth * 0.9,
    marginTop: 15,
    borderRadius: 23,
  },

  image: {
    width: undefined,
    height: "100%",
    overflow: "hidden",
    borderRadius: 23,
  },

  remove: {
    backgroundColor: colors.white,
    width: 40,
    height: 40,
    justifyContent: "center",
    borderRadius: 100,
    display: "flex",
    flexDirection: "row-reverse",
  },

  name: {
    fontFamily: "Inter_700Bold",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 22,
    color: colors.white,
    marginBottom: 10,
  },

  chipBox: {
    display: "flex",
    flexDirection: "row",
  },

  chipText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 12,
    height: 20,
  },

  chip: {
    backgroundColor: colors.white,
    marginRight: 10,
    borderRadius: 8,
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  cardContent: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    bottom: 1,
    alignSelf: "center",
    width: config.deviceWidth * 0.8,
    height: 100,
  },

  removeBox: {
    display: "flex",
    flexDirection: "row-reverse",
    position: "absolute",
    margin: config.deviceWidth * 0.05,
    top: 1,
    width: config.deviceWidth * 0.8,
  },
});
