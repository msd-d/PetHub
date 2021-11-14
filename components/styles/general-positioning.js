import { scale, ScaledSheet } from "react-native-size-matters";

export default ScaledSheet.create({
  flex1: {
    flex: 1,
  },
  flexRow: {
    flex: 1,
    flexDirection: "row",
  },
  flexRowMargin: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: "15@s",
  },
  flexRowMarginTop: {
    flex: 1,
    flexDirection: "row",
    marginTop: scale(16),
  },
  margin: {
    marginHorizontal: "15@s",
  },
  flexRowWrap: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  flexRowSpaceEvenly: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  flexRowMarginCenterItems: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: "15@s",
    alignItems: "center",
  },
  marginBottom: {
    marginBottom: "15@s",
  },
  flexCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fit100HW: {
    width: "100%",
    height: "100%",
  },
  activityIndicator: {
    position: "absolute",
    elevation: 2,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});
