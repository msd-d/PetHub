import React, { useContext } from "react";
import { Text, View } from "react-native";
import { Standard } from "components/styles/profile-style";
import PropTypes from "prop-types";
import AppContext from "../AppContext";

function ProfileScreen() {

  const myContext = useContext(AppContext);

  return (
    <View style={Standard.container}>
      <Text>Profile! {myContext.userID} </Text>
    </View>
  );
}

ProfileScreen.propTypes = {
  navigation: PropTypes.object,
};

export default ProfileScreen;
