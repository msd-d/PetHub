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
  empty: {
    flex: 1,
    display: "flex",
    width: "315@s",
    height: "315@s",
    marginTop: "15@msr",
    borderRadius: "20@msr",
    backgroundColor: colors.lightGray,
    alignSelf: "center",
  },
  star: {
    position: "absolute",
    right: "10@s",
    top: "10@vs",
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
  background: {
    backgroundColor: colors.white,
    color: colors.white,
  },
});
