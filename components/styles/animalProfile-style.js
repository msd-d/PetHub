import { StyleSheet } from "react-native";
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
});
