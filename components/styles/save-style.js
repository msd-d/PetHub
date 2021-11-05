import { StyleSheet } from "react-native";
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

  image: {
    width: undefined,
    height: "100%",
    overflow: "hidden",
    borderRadius: 23,
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
  }
});
