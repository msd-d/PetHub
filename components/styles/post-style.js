import { ScaledSheet } from "react-native-size-matters";
import colors from "../colors";

export default ScaledSheet.create({
  scrollview: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollviewContainer: {},
  postButtonContainer: {
    borderRadius: "20@msr",
  },
  postButton: {
    width: "140@s",
    height: "45@vs",
  },
  cancelButton: {
    width: "140@s",
    height: "42@vs",
  },
  cancelButtonContainer: {
    borderRadius: "20@msr",
    borderWidth: "2@msr",
    borderColor: colors.gray,
  },
  cancelButtonTitle: {
    color: colors.gray,
    fontSize: "16@msr",
  },
  description: {
    height: "150@s",
    marginHorizontal: "15@s",
    marginTop: "5@msr",
    backgroundColor: colors.lightGray,
    borderRadius: "10@msr",
    textAlignVertical: "top",
    padding: "10@msr",
  },
  input: {
    marginHorizontal: "15@s",
    backgroundColor: colors.lightGray,
    borderRadius: "10@msr",
    padding: "10@msr",
  },
  input2: {
    backgroundColor: colors.lightGray,
    padding: "10@msr",
    borderRadius: "10@msr",
    marginHorizontal: "5@s",
    marginRight: "5@s",
    marginBottom: "10@s",
    width: "175@s",
  },
  image: {
    width: undefined,
    height: "100%",
    overflow: "hidden",
    borderRadius: "10@s",
  },
  button: {
    width: "105@s",
    height: "105@s",
    borderRadius: "10@s",
    marginLeft: "9@s",
    marginTop: "9@s",
    backgroundColor: colors.lightGray,
  },
  icon: {
    width: "100%",
    height: "100%",
    flex: 1,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  chipText: {
    fontFamily: "Inter_700Bold",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "26@msr",
    marginVertical: "5@s",
    marginHorizontal: "15@s",
  },
  dateButton: {
    backgroundColor: colors.lightGray,
    borderRadius: "10@msr",
    width: "95@s",
  },
  dateTitle: {
    color: colors.gray,
  },
  whl: {
    color: colors.darkGray,
    fontFamily: "Inter_700Bold",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "15@msr",
    width: "60@s",
  },
  modal: {
    margin: "20@msr",
    backgroundColor: colors.white,
    borderRadius: "10@s",
    padding: "35@s",
    alignItems: "center",
    elevation: "5@s",
  },
  modalButton: {
    borderRadius: "10@s",
    padding: "10@s",
    elevation: "2@s",
    backgroundColor: colors.lightGray,
  },
  modalInfo: {
    color: colors.darkGray,
    fontFamily: "Inter_700Bold",
    fontStyle: "normal",
    fontWeight: "bold",
  },
  modalButtonText: {
    color: colors.darkGray,
    fontFamily: "Inter_700Bold",
    fontStyle: "normal",
    fontWeight: "bold",
  },
});
