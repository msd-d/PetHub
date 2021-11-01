import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../colors";
import GradientText from "./gradient-text";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  circleGradient: {
    margin: 2,
    backgroundColor: colors.white,
    borderRadius: 99,
  },
  text: {
    margin: 7,
    paddingHorizontal: 6,
    textAlign: "center",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 16,
  },
  gradient: {
    borderRadius: 99,
  },
});

export default class GradientButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity>
        <LinearGradient
          colors={["rgba(223, 122, 153, 1)", "rgba(232, 193, 171, 1)"]}
          start={{ x: -1, y: -1 }}
          end={{ x: 1, y: 3 }}
          style={styles.gradient}
        >
          <View style={styles.circleGradient}>
            <GradientText style={[this.props.style, styles.text]}>
              {this.props.title}
            </GradientText>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}

GradientButton.propTypes = {
  style: Text.propTypes.style,
  title: PropTypes.string,
};
