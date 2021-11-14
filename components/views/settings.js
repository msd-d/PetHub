import React, { useContext } from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";
import Ionicons from "@expo/vector-icons/Ionicons";
import PropTypes from "prop-types";
import AppContext from "../AppContext";
import settingsStyle from "components/styles/settings-style";
import colors from "../colors";

function SettingsScreen({ navigation }) {
  const myContext = useContext(AppContext);

  const logout = () => {
    console.log(myContext.userID + " logged out");
    myContext.updateUserID(null);
    navigation.navigate("Home");
  };

  return (
    <View style={settingsStyle.container}>
      <Button
        title={
          <View style={settingsStyle.row}>
            <Ionicons
              name={"log-out-outline"}
              size={40}
              color={colors.pethubPink}
            />
            <Text style={settingsStyle.text}>Log out</Text>
          </View>
        }
        style={settingsStyle.button}
        onPress={() => logout()}
      />
      <Button
        title={
          <View style={settingsStyle.row}>
            <Ionicons
              name={"trash-outline"}
              size={40}
              color={colors.pethubPink}
            />
            <Text style={settingsStyle.text}>Delete account</Text>
          </View>
        }
        style={settingsStyle.button}
        onPress={() => alert("Not yet supported")}
      />
    </View>
  );
}

SettingsScreen.propTypes = {
  navigation: PropTypes.object,
};

export default SettingsScreen;
