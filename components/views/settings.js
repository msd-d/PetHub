import React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";
import settingsStyle from "components/styles/settings-style";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "../colors";

function SettingsScreen() {
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
        onPress={() => alert("Not yet supported")}
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

export default SettingsScreen;