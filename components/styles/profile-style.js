import { ScaledSheet } from "react-native-size-matters";
import colors from "../colors";

export default ScaledSheet.create({
  container: {
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  top: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "10@s",
  },
  row: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  infoView: {
    margin: "10@s",
  },
  profilePicture: {
    alignItems: "center",
  },
  usernameText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  infoText: {
    backgroundColor: colors.lightGray,
    margin: "5@s",
    padding: "10@s",
    borderRadius: 99,
    flexGrow: 1,
  },
  button: {
    borderRadius: 99,
  },
  // TODO: refactor this, right now it's duplicated in three files (home, search and here)
  card: {
    flex: 1,
    display: "flex",
    width: "150@s",
    height: "150@msr",
    margin: "10@s",
    borderRadius: 23,
    justifyContent: "space-evenly",
  },
  empty: {
    flex: 1,
    display: "flex",
    width: "150@s",
    height: "150@msr",
    marginLeft: "10@s",
    marginTop: "15@s",
    borderRadius: 23,
    backgroundColor: colors.lightGray,
  },
  star: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    bottom: 1,
    alignSelf: "flex-start",
    margin: 10,
  },
  name: {
    fontFamily: "Inter_700Bold",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 22,
    color: colors.white,
    marginBottom: "5@s",
  },
  chip: {
    backgroundColor: colors.white,
    marginRight: "5@s",
    borderRadius: 8,
  },
  chipText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 6,
    height: 10,
  },
  chipBox: {
    display: "flex",
    flexDirection: "row",
  },
  image: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderRadius: 23,
  },
});
