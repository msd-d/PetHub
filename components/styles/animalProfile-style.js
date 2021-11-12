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
    borderRadius: 20,
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
  },
  subItem: {
    padding: scale(8),
    borderWidth: scale(3),
    borderRadius: scale(5),
    marginRight: scale(16),
  },
  details: {
    backgroundColor: colors.lightGray,
    borderColor: colors.lightGray,
    borderWidth: scale(3),
    borderRadius: scale(5),
    marginRight: scale(16),
  },
  detailName: {
    padding: scale(8),
  },
  detailValues: {
    borderColor: colors.darkGray,
    borderWidth: scale(3),
    borderRadius: scale(5),
    marginRight: scale(16),
  },
  detailValue: {
    padding: scale(8),
  },
  conditions: {
    backgroundColor: colors.darkGray,
    borderColor: colors.darkGray,
    borderWidth: scale(3),
    borderRadius: scale(5),
    marginRight: scale(16),
  },
  conditionName: {
    padding: scale(8),
    color: colors.white,
  },
});
