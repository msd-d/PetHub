import { StyleSheet } from "react-native"
import colors from "../colors"
import config from "../config"

export default StyleSheet.create({
    scrollview: {
        flex: 1, backgroundColor: colors.white
    },
    scrollviewContainer: {
    },
    postButton: {
        width: config.deviceWidth * 0.4, borderRadius: 99,
    },
    cancelButton: {
        width: config.deviceWidth * 0.4, borderRadius: 99,
        borderWidth: 2,
        borderColor: colors.gray
    },
    cancelButtonTitle: {
        color: colors.gray
    },
    description: {
        height: config.deviceWidth * 0.3,
        marginHorizontal: config.deviceWidth * 0.05,
        marginTop: 5, backgroundColor: colors.lightGray,
        borderRadius: 10, textAlignVertical: 'top',
        padding: 10
    },
    input: {
        marginHorizontal: config.deviceWidth * 0.05,
        backgroundColor: colors.lightGray,
        borderRadius: 8,
        padding: 10
    },
    input2: {
        backgroundColor: colors.lightGray,
        padding: 10,
        borderRadius: 8,
        width: config.deviceWidth * 0.45,
        marginBottom: config.deviceWidth * 0.025
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
        marginVertical: config.deviceWidth * 0.025
    },
    dateButton: {
        backgroundColor: colors.lightGray,
        borderRadius: 12,
        width: config.deviceWidth * 0.27,
    },
    dateTitle: {
        color: colors.gray,
    },
    whl: {
        color: colors.darkGray,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        width: config.deviceWidth * 0.2
    },
    genderButton: {
        borderRadius: 12,
        backgroundColor: colors.pethubPink
    },
    genderContainer: {
        marginHorizontal: config.deviceWidth * 0.05,
        borderRadius: 12,
        borderWidth: 0,
    },
    genderButtonDisabled: {
        borderRadius: 12,
        backgroundColor: colors.lightGray
    },
    genderBorder: {
        color: colors.transparent,
        width: config.deviceWidth * 0.05,
    }
})