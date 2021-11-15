import { ScaledSheet } from "react-native-size-matters";
import colors from "../colors";

export default ScaledSheet.create({
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
