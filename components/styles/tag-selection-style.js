import { ScaledSheet } from "react-native-size-matters";
import colors from "../colors";

export default ScaledSheet.create({
  selectToggle: {
    backgroundColor: colors.lightGray,
    borderRadius: "10@msr",
    padding: "10@msr",
    marginHorizontal: "15@s",
  },
  selectToggleText: {
    fontFamily: "Inter_700Bold",
    fontWeight: "bold",
    color: colors.gray,
  },
  button: {
    backgroundColor: colors.pethubPink,
  },
  subItemText: {
    fontFamily: "Inter_700Bold",
    fontWeight: "bold",
  },
  itemText: {
    fontFamily: "Inter_700Bold",
    fontWeight: "bold",
    fontSize: "16@msr",
  },
  chipContainer: {
    borderWidth: 1,
    backgroundColor: colors.lightGray,
  },
  chipsWrapper: {
    marginHorizontal: "15@s",
  },
});
