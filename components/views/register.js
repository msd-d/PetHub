import React from "react";
import { Text, TextInput, View, Pressable } from "react-native";
import { Standard } from "components/styles/save-style";
import registerStyles from "../styles/register-styles";
import GradientButton from "../colors/gradient-button";
import PropTypes from "prop-types";

const RegisterScreen = ({ navigation }) => {
  // TODO: Handle user registration

  return (
    <View style={Standard.container}>
      <Text style={registerStyles.header}>Register an account today!</Text>

      <TextInput style={registerStyles.input} placeholder={"Username"} />

      <TextInput
        secureTextEntry={true}
        style={registerStyles.input}
        placeholder={"Password"}
      />

      <TextInput
        secureTextEntry={true}
        style={registerStyles.input}
        placeholder={"Repeat Password"}
      />

      <View style={registerStyles.outerWall}>
        <GradientButton
          title={"Register"}
          style={registerStyles.registerButton}
          onPress={() =>
            alert("Registration will come later, enjoy the visuals for now")
          }
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
