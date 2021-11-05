import React, { Component } from "react";
import { Text, View } from "react-native";
import { Standard } from "components/styles/save-style";
import { Button } from "react-native-elements/dist/buttons/Button";
import { Input } from "react-native-elements/dist/input/Input";
import colors from "../colors";
import loginStyles from "../styles/login-styles";

class LoginScreen extends Component {
  render() {
    return (
      <View style={Standard.container}>
        <Text style={loginStyles.header}>Login!</Text>
        <Input></Input>
        <Input style={{ color: colors.gray }}></Input>
        <Button
          style={{ backgroundColor: colors.pethubPink }}
          title="Don't already have an account?"
          onPress={() => alert("Not yet supported")}
        ></Button>
      </View>
    );
  }
}

export default LoginScreen;
