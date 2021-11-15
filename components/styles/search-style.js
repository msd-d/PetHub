import { ScaledSheet } from "react-native-size-matters";
import colors from "../colors";

export default ScaledSheet.create({
  card: {
    flex: 1,
    display: "flex",
    width: "315@s",
    height: "315@s",
    marginTop: "15@msr",
    borderRadius: "20@msr",
    alignSelf: "center",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    bottom: "25@vs",
    left: "25@s",
  },
  name: {
    fontFamily: "Inter_700Bold",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "23@msr",
    color: colors.white,
    marginBottom: "8@msr",
  },
  chip: {
    backgroundColor: colors.white,
    marginRight: "8@s",
    borderRadius: "10@msr",
  },
  chipText: {
    fontFamily: "Inter_700Bold",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "12@msr",
  },
  chipBox: {
    display: "flex",
    flexDirection: "row",
  },
  image: {
    width: undefined,
    height: "100%",
    overflow: "hidden",
    borderRadius: "20@msr",
  },
  inputContainer: {
    marginHorizontal: "1@msr",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: "2@vs",
  },
  input: {
    backgroundColor: colors.lightGray,
    borderRadius: "10@msr",
    width: "145@s",
    margin: "5@msr",
    padding: "10@msr",
  },
  searchBarInput: {
    backgroundColor: colors.lightGray,
    color: colors.darkGray,
  },
  searchBarInputContainer: {
    backgroundColor: colors.lightGray,
    borderRadius: "10@msr",
  },
  searchBarContainer: {
    backgroundColor: colors.lightGray,
    borderBottomColor: colors.transparent,
    borderTopColor: colors.transparent,
    marginHorizontal: "1@s",
    marginTop: "5@vs",
    padding: "0@msr",
    borderRadius: "10@msr",
  },
  searchBarLeftIconContainer: {},
  searchBarRightIconContainer: {},

  container: {
    backgroundColor: colors.white,
  },
});
