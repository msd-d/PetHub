import React, { useEffect, useState } from "react";
import { Switch, Text, View } from "react-native";
import { Standard } from "components/styles/debug-style";
import { Button } from "react-native-elements";
import Database from "../database";
import PropTypes from "prop-types";

function DebugScreen({ navigation }) {
  // ----------------------------- Debug toggle
  const [value, setValue] = useState(false);

  const readItemFromStorage = async () => {
    const item = await Database.getItem("debug");
    setValue(item);
  };

  const writeItemToStorage = async (newValue) => {
    await Database.setItem(newValue, "debug");
    setValue(newValue);
  };

  useEffect(() => {
    readItemFromStorage();
  }, []);
  // ------------------------------

  return (
    <View style={Standard.container}>
      <Text>Profile!</Text>
      <Button
        title={"Debug clear"}
        onPress={async () => {
          await Database.clearData();
        }}
      ></Button>
      <Text>Toggle debug output</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={value ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={writeItemToStorage}
        value={value}
      />
      <Button
        title={"Debug login"}
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
}

DebugScreen.propTypes = {
  navigation: PropTypes.object,
};

export default DebugScreen;
