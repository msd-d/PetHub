import { StyleSheet } from "react-native";
import colors from "../colors";
import config from "../config";

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
  cardContent: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    bottom: 1,
    alignSelf: "center",
    width: config.deviceWidth * 0.8,
    height: 100,
  },
  name: {
    fontFamily: "Inter_700Bold",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 22,
    color: colors.white,
    marginBottom: 10,
  },
  chip: {
    backgroundColor: colors.white,
    marginRight: 10,
    borderRadius: 8,
  },
  chipText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 12,
    height: 20,
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
  input: {
    marginHorizontal: config.deviceWidth * 0.05,
    backgroundColor: colors.lightGray,
    borderRadius: 8,
    padding: 10,
  },
  container: {
    marginTop: 10,
    marginBottom: 10,
  },
});
