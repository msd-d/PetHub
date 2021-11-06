import React, { useContext, useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { Standard } from "components/styles/save-style";
import colors from "../colors";
import loginStyles from "../styles/login-styles";
import GradientButton from "../colors/gradient-button";
import PropTypes from "prop-types";

import AppContext from "../AppContext";
import Database from "../database";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const myContext = useContext(AppContext);

  const handleLogin = async () => {
    await Database.getUser(username, password).then((success) => {
      if (!success) {
        Alert.alert("Wrong password or password, please try again");
      } else {
        myContext.updateUserID(username);
        navigation.navigate("Profile");
      }
    });
  };

  return (
    <View style={Standard.container}>
      <Text style={loginStyles.header}>Welcome!</Text>

      {/* Username input */}
      <TextInput
        style={loginStyles.input}
        placeholder={"Username"}
        onChangeText={(username) => setUsername(username)}
      />

      {/* Password input */}
      <TextInput
        secureTextEntry={true}
        style={loginStyles.input}
        placeholder={"Password"}
        onChangeText={(text) => setPassword(text)}
      />

      {/* TODO: Handle login */}
      <GradientButton
        title={"Sign in"}
        style={loginStyles.loginButton}
        onPress={() => {
          handleLogin();
        }}
      />

      {/* Register */}
      <Pressable onPress={() => navigation.navigate("Register")}>
        <Text style={{ margin: 10, color: colors.pethubPink }}>
          Don't have an account yet?
        </Text>
      </Pressable>

      <Text style={{ color: colors.pethubPink }}>or</Text>

      {/* Continue as guest */}
      <Pressable onPress={() => navigation.navigate("Home")}>
        <Text style={{ margin: 10, color: colors.pethubPink }}>
          Continue as guest
        </Text>
      </Pressable>
    </View>
  );
};

LoginScreen.propTypes = {
  navigation: PropTypes.object,
};

export default LoginScreen;
