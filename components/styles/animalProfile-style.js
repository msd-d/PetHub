import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
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
    padding: moderateScale(8),
    backgroundColor: colors.pethubPink,
    marginLeft: moderateScale(8),
    marginRight: moderateScale(8),
    borderRadius: 50,
  },
  description: {
    fontSize: moderateScale(18),
    fontWeight: "400",
    marginTop: moderateScale(18),
  },
  location: {
    display: "flex",
  },
  locationName: {
    color: colors.darkGray,
  },
  subItem: {
    padding: moderateScale(8),
    borderWidth: moderateScale(3),
    borderRadius: moderateScale(5),
    marginRight: moderateScale(16),
  },
  details: {
    backgroundColor: colors.lightGray,
    borderColor: colors.lightGray,
    borderWidth: moderateScale(3),
    borderRadius: moderateScale(5),
    marginRight: moderateScale(16),
  },
  detailName: {
    padding: moderateScale(8),
  },
  detailValues: {
    borderColor: colors.darkGray,
    borderWidth: moderateScale(3),
    borderRadius: moderateScale(5),
    marginRight: moderateScale(16),
  },
  detailValue: {
    padding: moderateScale(8),
  },
  conditions: {
    backgroundColor: colors.darkGray,
    borderColor: colors.darkGray,
    borderWidth: moderateScale(3),
    borderRadius: moderateScale(5),
    marginRight: moderateScale(16),
  },
  conditionName: {
    padding: moderateScale(8),
    color: colors.white,
  },
});
