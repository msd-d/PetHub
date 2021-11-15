import { ScaledSheet } from "react-native-size-matters";
import colors from "../colors";

export default ScaledSheet.create({
  outerWall: {
    margin: "30@msr",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: "20@msr",
    fontWeight: "bold",
    marginBottom: "20@vs",
    color: colors.pethubPink,
  },
  input: {
    backgroundColor: colors.lightGray,
    borderRadius: 8,
    width: "280@s",
    margin: "5@msr",
    padding: "8@msr",
  },
  loginButton: {
    width: "100@s",
    borderRadius: 99,
  },
  pressableText: {
    margin: "5@msr",
    color: colors.pethubPink,
  },
});
