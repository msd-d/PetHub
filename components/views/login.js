import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { Standard } from "components/styles/save-style";
import colors from "../colors";
import loginStyles from "../styles/login-styles";
import GradientButton from "../colors/gradient-button";
import PropTypes from "prop-types";

function LoginScreen({ navigation }) {
  return (
    <View style={Standard.container}>
      <Text style={loginStyles.header}>Welcome!</Text>

      <TextInput style={loginStyles.input} placeholder="Email"></TextInput>
      <TextInput
        secureTextEntry={true}
        style={loginStyles.input}
        placeholder="Password"
      ></TextInput>

      {/* TODO: Handle login */}
      <GradientButton
        title={"Sign in"}
        style={loginStyles.loginButton}
        onPress={() => navigation.navigate("Profile")}
      ></GradientButton>

      {/* TODO: Handle user id */}
      <Pressable onPress={() => navigation.navigate("Register")}>
        <Text style={{ margin: 10, color: colors.pethubPink }}>
          Don't have an account yet?
        </Text>
      </Pressable>
      <Text style={{ color: colors.pethubPink }}>or</Text>
      <Pressable onPress={() => navigation.navigate("Home")}>
        <Text style={{ margin: 10, color: colors.pethubPink }}>
          Continue as guest
        </Text>
      </Pressable>
    </View>
  );
}

LoginScreen.propTypes = {
  navigation: PropTypes.object,
};

export default LoginScreen;
