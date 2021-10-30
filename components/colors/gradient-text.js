import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    gradientText: {
        opacity: 0,
    }
})

export default class GradientText extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MaskedView maskElement={<Text {...this.props} />}>
                <LinearGradient
                    colors={["rgba(232, 193, 171, 1)", "rgba(223, 122, 153, 1)"]}
                    start={{ x: -1, y: -1 }}
                    end={{ x: 1, y: 3 }}
                >
                    <Text {...this.props} style={[this.props.style, styles.gradientText]} />
                </LinearGradient>
            </MaskedView>
        );
    }
}

GradientText.propTypes = { style: Text.propTypes.style }
