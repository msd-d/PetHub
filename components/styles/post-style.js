import { StyleSheet } from "react-native"
import colors from "../colors"
import config from "../config"

export default StyleSheet.create({
    scrollview:{
      flex: 1, backgroundColor: colors.white 
    },
    postButton:{
      width: config.deviceWidth * 0.4, borderRadius: 99
    },
    cancelButton:{
      width: config.deviceWidth * 0.4, borderRadius: 99 
    },
    description:{
      height: config.deviceWidth * 0.3, marginHorizontal: config.deviceWidth * 0.05, marginTop: 5, backgroundColor: colors.lightGray, borderRadius: 10, textAlignVertical: 'top', padding: 5 
    },
    input:{
      marginHorizontal: config.deviceWidth * 0.05, backgroundColor: colors.lightGray, borderRadius: 8 
    },
    input2:{
      backgroundColor: colors.lightGray 
      },
    image: {
      width: undefined,
      height: '100%',
      overflow: 'hidden',
      borderRadius: 12,
    },
    button: {
      width: config.deviceWidth * 0.3,
      height: config.deviceWidth * 0.3,
      borderRadius: 12,
      marginLeft: config.deviceWidth * 0.025,
      marginTop: config.deviceWidth * 0.025,
      backgroundColor: colors.lightGray,
    },
    icon: {
      width: '100%',
      height: '100%',
      flex: 1,
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
    },
    chipText: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 25,
      height: 35,
    },
  })