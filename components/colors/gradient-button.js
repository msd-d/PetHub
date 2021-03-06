import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";
import { Button } from "react-native-elements";
import { moderateScale } from "react-native-size-matters";

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontFamily: "Inter_700Bold",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: moderateScale(16),
  },
  button: {
    borderRadius: 20,
  },
  container: {},
});

export default class GradientButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Button
        ViewComponent={LinearGradient}
        linearGradientProps={{
          colors: ["rgba(223, 122, 153, 1)", "rgba(232, 193, 171, 1)"],
          start: { x: -1, y: -1 },
          end: { x: 1, y: 3 },
        }}
        title={this.props.title}
        titleStyle={[styles.text]}
        buttonStyle={[styles.button, this.props.buttonStyle]}
        containerStyle={[styles.container, this.props.containerStyle]}
        onPress={this.props.onPress}
      />
    );
  }
}

GradientButton.propTypes = {
  buttonStyle: Text.propTypes.style,
  containerStyle: Text.propTypes.style,
  title: PropTypes.string,
  onPress: PropTypes.func,
};
