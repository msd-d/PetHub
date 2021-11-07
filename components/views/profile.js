import React, { useContext, useEffect, useState } from "react";
import { Text, View, ViewPropTypes } from "react-native";
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
          title={<Ionicons name={"settings"} size={40} color={colors.pethubPink}/>}
          style={profileStyle.button}
          onPress={() => alert("Not yet supported")}
        />
        <View>
          <Ionicons name={"person"} size={100} color={colors.pethubPink}/>
          <Text>{myContext.userID} </Text>
        </View>
          
        <Button
          title={<Ionicons name={"log-out"} size={40} color={colors.pethubPink}/>}
          style={profileStyle.button}
          onPress={() => alert("Not yet supported")}
        />
      </View>

      {/* User info */}
      <View>
        <View>
          <Ionicons name={"call"} size={100} color={colors.darkGray}/>
          <Text>{phone} </Text>
        </View>
        <View>
          <Ionicons name={"mail"} size={100} color={colors.darkGray}/>
          <Text>{email} </Text>
        </View>
        <View>
          <Ionicons name={"pin"} size={100} color={colors.darkGray}/>
          <Text>{location} </Text>
        </View>
      </View>


    </View>
  );
}

ProfileScreen.propTypes = {
  navigation: PropTypes.object,
};

export default ProfileScreen;
