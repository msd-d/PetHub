import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import colors from "../colors";
import config from "../config";

export default StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: config.deviceWidth * 0.05,
  },
  card: {
    flex: 1,
    display: "flex",
    width: config.deviceWidth * 0.9,
    height: config.deviceWidth * 0.9,
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 23,
  },
  scrollView: {},
  image: {
    width: undefined,
    height: "100%",
    overflow: "hidden",
    borderRadius: 23,
  },
  name: {
    fontWeight: "bold",
    fontSize: 32,
  },
  actions: {
    flexDirection: "row-reverse",
    alignItems: "center",
    flex: 1,
  },
  takeAction: {
    borderRadius: 99,
    marginLeft: scale(32),
  },
  description: {
    fontSize: scale(18),
    fontWeight: "400",
    marginTop: scale(18),
  },
  location: {
    display: "flex",
  },
  locationName: {
    color: colors.darkGray,
    marginTop: scale(-2.5),
  },
  subItem: {
    margin: scale(4),
  },
});
