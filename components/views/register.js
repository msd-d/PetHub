import React from "react";
import { Text, View } from "react-native";
import { Standard } from "components/styles/save-style";
import { Button } from "react-native-elements/dist/buttons/Button";

class RegisterScreen extends React.Component {
  render() {
    return (
      <View style={Standard.container}>
        <Text>Register a profile</Text>
        <Button
          title="Already have an account?"
          onPress={() => alert("Not yet supported")}
        ></Button>
      </View>
    );
  }
}

export default RegisterScreen;
