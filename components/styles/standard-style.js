import { ScaledSheet } from "react-native-size-matters";
import colors from "../colors";

export default ScaledSheet.create({
  container: {},
  buttonTextBold: {
    color: colors.darkGray,
    fontFamily: "Inter_700Bold",
    fontStyle: "normal",
    fontWeight: "bold",
  },
  genderButton: {
    borderRadius: "20@msr",
    backgroundColor: colors.pethubPink,
  },
  genderBorder: {
    color: colors.transparent,
    width: "10@s",
  },
  genderButtonDisabled: {
    borderRadius: "20@msr",
    backgroundColor: colors.lightGray,
  },
  genderContainer: {
    marginHorizontal: "20@s",
    borderRadius: "20@msr",
    borderWidth: 0,
  },
});
