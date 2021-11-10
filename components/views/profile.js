import React, { useContext, useEffect, useState } from "react";
import { Text, TextInput, View, Image, ViewPropTypes } from "react-native";
import { Chip } from "react-native-elements";
import GradientText from "../colors/gradient-text";
import PropTypes from "prop-types";
import AppContext from "../AppContext";
import Database from "../database";
import profileStyle from "../styles/profile-style";
import { Button } from "react-native-elements/dist/buttons/Button";
import Ionicons from "@expo/vector-icons/Ionicons";
import homeStyle from "../styles/home-style";
import { getAgeFromTime } from "../util";

import colors from "../colors";
import { FlatList } from "react-native-gesture-handler";


const ProfileScreen = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [postings, setPostings] = useState([]);

  const myContext = useContext(AppContext);

  useEffect(() => {
    Database.getUser(myContext.userID).then((user) => {
      setPhone(user.phone);
      setEmail(user.email);
      setLocation(user.location);
      getData();
    }), [];
  });

  const getData = () => {
    let temp;
    Database.getItem("data").then((data) => {
      temp = data.filter((object) => {
        return object.postedBy === myContext.userID
      });
      setPostings(temp);
    });
  };
  
  const onRefresh = () => {
    setIsFetching(true);
    getData();
    setIsFetching(false);
  };
  
  const renderItem = ({ item }) => (
    <View style={homeStyle.card}>
      <Image
        source={{ uri: item.images[0] }}
        resizeMode="cover"
        overflow="hidden"
        style={homeStyle.image}
      />
      <View style={homeStyle.cardContent}>
        <Text style={homeStyle.name}>{item.name}</Text>
        <View style={homeStyle.chipBox}>
          <Chip
            title={
              <GradientText style={homeStyle.chipText}>
                {item.breeds.length > 1 ? "Mixed" : item.breeds[0]}
              </GradientText>
            }
            titleStyle={homeStyle.chipText}
            buttonStyle={homeStyle.chip}
          />
          <Chip
            title={
              <GradientText style={homeStyle.chipText}>
                {item.gender}
              </GradientText>
            }
            titleStyle={homeStyle.chipText}
            buttonStyle={homeStyle.chip}
          />
          <Chip
            title={
              <GradientText style={homeStyle.chipText}>
                {getAgeFromTime(new Date(item.birthDate)) + " y/o"}
              </GradientText>
            }
            titleStyle={homeStyle.chipText}
            buttonStyle={homeStyle.chip}
          />
        </View>
      </View>
    </View>
  );

  const header = () => {
    <View>
      // Settings, user photo, and logout
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
    
      // User info
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
    </View>
  };

  return (
    <View>
                // Settings, user photo, and logout
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
        
          // User info
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

      <FlatList 
        data={postings}
        extraData={postings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        refreshing={isFetching}
        onRefresh={() => onRefresh}
        />
      </View>
  );
}

ProfileScreen.propTypes = {
  navigation: PropTypes.object,
};

export default ProfileScreen;
