import React from "react";
import { Text, View } from "react-native";
import { Standard } from "components/styles/profile-style";
import PropTypes from "prop-types";

function ProfileScreen() {
  return (
    <View style={Standard.container}>
      <Text>Profile!</Text>
    </View>
  );
}

ProfileScreen.propTypes = {
  navigation: PropTypes.object,
}

export default ProfileScreen;
