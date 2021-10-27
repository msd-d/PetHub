import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import { StyleSheet, Text } from 'react-native';

const GradientText = (props) => {
    GradientText.propTypes = {
        style: Text.propTypes.style
    };
    return (
        <MaskedView maskElement={<Text {...props} />}>
            <LinearGradient
                colors={["rgba(232, 193, 171, 1)", "rgba(223, 122, 153, 1)"]}
                start={{ x: -1, y: -1 }}
                end={{ x: 1, y: 3 }}
            >
                <Text {...props} style={[props.style, styles.gradientText]} />
            </LinearGradient>
        </MaskedView>
    );
};

const styles = StyleSheet.create({
    gradientText: {
        opacity: 0,
    }
})

export default GradientText;