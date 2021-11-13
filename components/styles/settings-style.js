import { ScaledSheet } from "react-native-size-matters";
import colors from "../colors";

export default ScaledSheet.create({
  container: {
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "200@s",
  },
  button: {
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 99,
  },
  text: {
    padding: 10,
  },
});