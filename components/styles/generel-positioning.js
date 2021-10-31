import { StyleSheet } from 'react-native';
import config from '../config';

export default StyleSheet.create({
    flex1: {
        flex: 1
    },
    flexRow: { 
        flex: 1, 
        flexDirection: 'row' 
    },
    flexRowMargin: { 
        flex: 1, 
        flexDirection: 'row',
        marginHorizontal: config.deviceWidth * 0.05
    },
    flexRowWrap: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})
