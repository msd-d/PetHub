import React, { useContext, useEffect, useState } from "react";
import { Text, TextInput, View, ViewPropTypes } from "react-native";
import { Standard } from "components/styles/profile-style";
import PropTypes from "prop-types";
import AppContext from "../AppContext";
import Database from "../database";
import profileStyle from "../styles/profile-style";
import { Button } from "react-native-elements/dist/buttons/Button";
import Ionicons from "@expo/vector-icons/Ionicons";

import colors from "../colors";


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
    });
  });

  return (
    <View style={profileStyle.container}>
      
      {/* Settings, user photo, and logout */}
      <View style={profileStyle.top}>
        <Button
          title={<Ionicons name={"settings-outline"} size={40} color={colors.pethubPink}/>}
          style={profileStyle.button}
          onPress={() => alert("Not yet supported")}
        />
        <View style={profileStyle.profilePicture}>
          <Ionicons name={"person"} size={100} color={colors.pethubPink}/>
          <Text style={profileStyle.usernameText}>{myContext.userID}</Text>
        </View>
          
        <Button
          title={<Ionicons name={"log-out-outline"} size={40} color={colors.pethubPink}/>}
          style={profileStyle.button}
          onPress={() => alert("Not yet supported")}
        />
      </View>

      {/* User info */}
      {/* TODO: Make component */}
      <View style={profileStyle.infoView}>
        <View style={profileStyle.row}>
          <Ionicons name={"call"} size={30} color={colors.darkGray}/>
          <Text style={profileStyle.infoText}> {phone} </Text>
        </View>
        <View style={profileStyle.row}>
          <Ionicons name={"at"} size={30} color={colors.darkGray}/>
          <Text style={profileStyle.infoText}>{email} </Text>
        </View>
        <View style={profileStyle.row}>
          <Ionicons name={"pin"} size={30} color={colors.darkGray}/>
          <Text style={profileStyle.infoText}>{location} </Text>
        </View>
      </View>

      <View style={profileStyle.postingsView}>
        <Text>some text</Text>
        <Text>some text</Text>
        <Text>some text</Text>
        <Text>some text</Text>
        <Text>some text</Text>
        <Text>some text</Text>
        <Text>some text</Text>
        <Text>some text</Text>
        <Text>some text</Text>
        <Text>some text</Text>
      </View>
    </View>
  );
}

ProfileScreen.propTypes = {
  navigation: PropTypes.object,
};

export default ProfileScreen;
