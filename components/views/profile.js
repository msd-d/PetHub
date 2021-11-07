import React, { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Standard } from "components/styles/profile-style";
import PropTypes from "prop-types";
import AppContext from "../AppContext";
import Database from "../database";

const ProfileScreen = () => {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  // const [postings, setPostings] = useState();

  const myContext = useContext(AppContext);

  useEffect(() => {
    Database.getUser(myContext.userID).then((user) => {
      setPhone(user.phone);
      setEmail(user.email);
      setLocation(user.location);
      // TODO: Handle postings
    })
  })

  return (
    <View style={Standard.container}>
      

      <Text>{myContext.userID} </Text>
      <Text>{phone} </Text>
      <Text>{email} </Text>
      <Text>{location} </Text>
    </View>
  );
}

ProfileScreen.propTypes = {
  navigation: PropTypes.object,
};

export default ProfileScreen;
