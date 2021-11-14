import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Chip } from "react-native-elements";
import { Button } from "react-native-elements/dist/buttons/Button";
import PropTypes from "prop-types";
import Ionicons from "@expo/vector-icons/Ionicons";
import { getAgeFromTime } from "../util";
import Database from "../database";
import AppContext from "../AppContext";
import colors from "../colors";
import GradientText from "../colors/gradient-text";
import profileStyle from "../styles/profile-style";

const ProfileScreen = ({ navigation }) => {
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
      onRefresh();
    });
  }, [myContext.userID]);

  const onRefresh = () => {
    setIsFetching(true);
    getData();
    setIsFetching(false);
  };

  const getData = async () => {
    let temp;
    await Database.getItem("data").then((data) => {
      temp = data.filter((object) => {
        return object.postedBy === myContext.userID;
      });
      setPostings(temp);
    });
  };

  const removePost = (id, name) => {
    Alert.alert(
      "Confirm deletion of post",
      "Are you sure that you want to delete " + name + "?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancelled"),
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: async () => {
            if (await Database.removePost(id)) {
              onRefresh();
              myContext.updateData();
            } else {
              alert(
                "Sorry, an error happended when trying to delete the post. Please try again."
              );
            }
          },
        },
      ]
    );
  };

  const renderItem = ({ item }) => (
    <View style={profileStyle.card}>
      <Image
        source={{ uri: item.images[0] }}
        resizeMode="cover"
        overflow="hidden"
        style={profileStyle.image}
      />
      <TouchableOpacity
        style={profileStyle.delete}
        onPress={() => removePost(item.id, item.name)}
      >
        <Ionicons name={"trash"} size={30} color={colors.red} />
      </TouchableOpacity>

      <TouchableOpacity
        style={profileStyle.edit}
        onPress={() => alert("Not supported yet")}
      >
        <Ionicons name={"create"} size={30} color={colors.white} />
      </TouchableOpacity>

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
              onPress={() => navigation.navigate("Settings")}
            />

            {/* TODO: Insert actual profile picture */}
            <View style={profileStyle.profilePicture}>
              <Ionicons name={"person"} size={100} color={colors.pethubPink} />
              <Text style={profileStyle.usernameText}>{myContext.userID}</Text>
            </View>

            <Button
              title={
                <Ionicons
                  name={"create-outline"}
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
      onRefresh={() => onRefresh()}
    />
  );
};

ProfileScreen.propTypes = {
  navigation: PropTypes.object,
};

export default ProfileScreen;
