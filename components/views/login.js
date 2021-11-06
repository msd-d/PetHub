import React, { Component } from "react";
import { Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Standard } from "components/styles/save-style";
import colors from "../colors";
import loginStyles from "../styles/login-styles";
import GradientButton from "../colors/gradient-button";

class LoginScreen extends Component {
  render() {
    return (
      <View style={Standard.container}>
        <Text style={loginStyles.header}>Welcome!</Text>

        <TextInput style={loginStyles.input} placeholder="Email" ></TextInput>
        <TextInput style={loginStyles.input} placeholder="Password" ></TextInput>

        <GradientButton
          title={"Sign in"}
          style={loginStyles.loginButton}
          onPress={() => alert("Not yet supported")}
        ></GradientButton>

        <Pressable 
          onPress={() => alert("Not yet supported")}
        >
          <Text style= {{ margin: 10, color: colors.pethubPink }}>
            Don't have an account yet?
          </Text>
        </Pressable>
        <Text style= {{color: colors.pethubPink }}>or</Text>
        <Pressable 
          onPress={() => alert("Not yet supported")}
        >
          <Text style= {{ margin: 10, color: colors.pethubPink }}>
            Continue as guest
          </Text>
        </Pressable>
      </View>
    );
  }
}

export default LoginScreen;
