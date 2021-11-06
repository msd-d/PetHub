import { StyleSheet } from "react-native";
import config from "../config";

export default StyleSheet.create({
  flex1: {
    flex: 1,
  },
  flexRow: {
    flex: 1,
    flexDirection: "row",
  },
  flexRowMargin: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: config.deviceWidth * 0.05,
  },
  margin: {
    marginHorizontal: config.deviceWidth * 0.05,
  },
  flexRowWrap: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  flexRowSpaceEvenly: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  flexRowMarginCenterItems: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: config.deviceWidth * 0.05,
    alignItems: "center",
  },
  marginBottom: {
    marginBottom: config.deviceWidth * 0.05,
  },
  flexCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fit100HW: {
    width: "100%",
    height: "100%",
  },
});
