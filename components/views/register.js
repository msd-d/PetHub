import React, { useState } from "react";
import { Text, TextInput, View, Pressable, Alert } from "react-native";
import { Standard } from "components/styles/save-style";
import registerStyles from "../styles/register-styles";
import GradientButton from "../colors/gradient-button";
import PropTypes from "prop-types";
import Database from "../database";

const RegisterScreen = ({ navigation }) => {
  // User values
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeat, setRepeat] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  // Handle user registration
  const handleRegister = async () => {
    // Minimum length usernames
    if (username.length < 3)
      return Alert.alert(
        "Error",
        "Your username should be more than 3 characters."
      );

    // Check for valid email address
    // Could use some maiddleware for this
    if (email.length < 3 || !email.includes("@"))
      return Alert.alert("Error", "Invalid email address.");

    // Passwords should be 6 characters or longer
    if (password.length < 6)
      return Alert.alert(
        "Error",
        "Your password should more than 6 characters."
      );

    // Other middleware to verify the data
    if (password !== repeat)
      return Alert.alert("Error", "Your passwords do not match.");

    // Register the user using the input data
    // Address and phone number is optional for now
    const success = await Database.registerUser(
      username,
      email,
      password,
      address,
      phone
    );

    // Account created
    if (success) {
      // Success registering the user
      // Alerrt the user and navigate to the login view
      Alert.alert("Success!", "Your PetHub account was successfully created!", [
        { text: "Yay!", onPress: () => navigation.navigate("Login") },
        { cancelable: false },
      ]);
    }
  };

  return (
    <View style={Standard.container}>
      <Text style={registerStyles.header}>Register an account today!</Text>

      <TextInput
        style={registerStyles.input}
        placeholder={"Username"}
        onChangeText={(username) => setUsername(username)}
      />

      <TextInput
        style={registerStyles.input}
        placeholder={"E-mail"}
        onChangeText={(email) => setEmail(email)}
      />

      <TextInput
        secureTextEntry={true}
        style={registerStyles.input}
        placeholder={"Password"}
        onChangeText={(password) => setPassword(password)}
      />

      <TextInput
        secureTextEntry={true}
        style={registerStyles.input}
        placeholder={"Repeat your password"}
        onChangeText={(repeat) => setRepeat(repeat)}
      />

      <TextInput
        style={registerStyles.input}
        placeholder={"Home address"}
        onChangeText={(address) => setAddress(address)}
      />

      <TextInput
        style={registerStyles.input}
        placeholder={"Phone number"}
        onChangeText={(phone) => setPhone(phone)}
      />

      <View style={registerStyles.outerWall}>
        <GradientButton
          title={"Register"}
          style={registerStyles.registerButton}
          onPress={() => handleRegister()}
        />
      </View>

      <Pressable onPress={() => navigation.navigate("Login")}>
        <Text style={registerStyles.pressableText}>Go back</Text>
      </Pressable>
    </View>
  );
};

RegisterScreen.propTypes = {
  navigation: PropTypes.object,
};

export default RegisterScreen;
