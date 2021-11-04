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
  inputContainer: {
    marginHorizontal: config.deviceWidth * 0.05,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 10,
  },
  input: {
    backgroundColor: colors.lightGray,
    borderRadius: 8,
    width: config.deviceWidth * 0.45,
    margin: 5,
    padding: 10,
  },
  searchBarInput: {
    backgroundColor: colors.lightGray,
    color: colors.darkGray,
  },
  searchBarInputContainer: {
    backgroundColor: colors.lightGray,
    borderRadius: 12,
  },
  searchBarContainer: {
    backgroundColor: colors.lightGray,
    borderBottomColor: colors.transparent,
    borderTopColor: colors.transparent,
    marginHorizontal: config.deviceWidth * 0.05,
    padding: 0,
    borderRadius: 14,
  },
  searchBarLeftIconContainer: {},
  searchBarRightIconContainer: {},

  container: {
    backgroundColor: colors.white,
  },
});
