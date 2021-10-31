import { StyleSheet } from "react-native";
import { color } from "react-native-elements/dist/helpers";
import colors from "../colors";
import config from "../config";

export default StyleSheet.create({
    selectToggle: {
      backgroundColor: colors.lightGray,
      borderRadius: 12,
      padding: 10,
      marginHorizontal: config.deviceWidth * 0.05,
    },
    selectToggleText: {
      fontFamily: 'Roboto',
      fontWeight: 'bold',
      color: colors.gray
    },
    button: {
      backgroundColor: colors.pethubPink
    },
    subItemText: {
      fontFamily: 'Roboto',
      fontWeight: 'bold',
    },
    itemText: {
      fontFamily: 'Roboto',
      fontWeight: 'bold',
      fontSize: 16
    },
    chipContainer: {
        borderWidth: 1,
        backgroundColor: colors.lightGray
    },
    chipsWrapper: {
        marginHorizontal: config.deviceWidth * 0.05,
    },
  })