import React, { useContext, useEffect, useState } from "react";
import { Text, View, Image } from "react-native";
import { Chip } from "react-native-elements";
import GradientText from "../colors/gradient-text";
import AppContext from "../AppContext";
import Database from "../database";
import profileStyle from "../styles/profile-style";
import { Button } from "react-native-elements/dist/buttons/Button";
import Ionicons from "@expo/vector-icons/Ionicons";
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

  // TODO: Fix this
  useEffect(() => {
    Database.getUser(myContext.userID).then((user) => {
      setPhone(user.phone);
      setEmail(user.email);
      setLocation(user.location);
      getData();
      console.log("useEffect called");
    }),
      [];
  });

  const getData = () => {
    let temp;
    Database.getItem("data").then((data) => {
      temp = data.filter((object) => {
        return object.postedBy === myContext.userID;
      });
      setPostings(temp);
    });
  };

  const onRefresh = () => {
    setIsFetching(true);
    getData();
    setIsFetching(false);
  };

  // TODO: refactor to it's own component
  const renderItem = ({ item }) => (
    <View style={profileStyle.card}>
      <Image
        source={{ uri: item.images[0] }}
        resizeMode="cover"
        overflow="hidden"
        style={profileStyle.image}
      />
      <View style={profileStyle.cardContent}>
        <Text style={profileStyle.name}>{item.name}</Text>
        <View style={profileStyle.chipBox}>
          <Chip
            title={
              <GradientText style={profileStyle.chipText}>
                {item.breeds.length > 1 ? "Mixed" : item.breeds[0]}
              </GradientText>
            }
            titleStyle={profileStyle.chipText}
            buttonStyle={profileStyle.chip}
          />
          <Chip
            title={
              <GradientText style={profileStyle.chipText}>
                {item.gender}
              </GradientText>
            }
            titleStyle={profileStyle.chipText}
            buttonStyle={profileStyle.chip}
          />
          <Chip
            title={
              <GradientText style={profileStyle.chipText}>
                {getAgeFromTime(new Date(item.birthDate)) + " y/o"}
              </GradientText>
            }
            titleStyle={profileStyle.chipText}
            buttonStyle={profileStyle.chip}
          />
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      ListHeaderComponent={
        <View>
          {/* Settings, user photo, and logout */}
          <View style={profileStyle.top}>
            <Button
              title={
                <Ionicons
                  name={"settings-outline"}
                  size={40}
                  color={colors.pethubPink}
                />
              }
              style={profileStyle.button}
              onPress={() => alert("Not yet supported")}
            />

            {/* TODO: Insert actual profile picture */}
            <View style={profileStyle.profilePicture}>
              <Ionicons name={"person"} size={100} color={colors.pethubPink} />
              <Text style={profileStyle.usernameText}>{myContext.userID}</Text>
            </View>

            <Button
              title={
                <Ionicons
                  name={"log-out-outline"}
                  size={40}
                  color={colors.pethubPink}
                />
              }
              style={profileStyle.button}
              onPress={() => alert("Not yet supported")}
            />
          </View>

          {/* User info
           *   TODO: Make component, scale icons
           */}
          <View style={profileStyle.infoView}>
            <View style={profileStyle.row}>
              <Ionicons name={"call"} size={30} color={colors.darkGray} />
              <Text style={profileStyle.infoText}> {phone} </Text>
            </View>
            <View style={profileStyle.row}>
              <Ionicons name={"at"} size={30} color={colors.darkGray} />
              <Text style={profileStyle.infoText}>{email} </Text>
            </View>
            <View style={profileStyle.row}>
              <Ionicons name={"pin"} size={30} color={colors.darkGray} />
              <Text style={profileStyle.infoText}>{location} </Text>
            </View>
          </View>
        </View>
      }
      data={postings}
      extraData={postings}
      numColumns={2}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      refreshing={isFetching}
      onRefresh={() => onRefresh}
    />
  );
};

export default ProfileScreen;
