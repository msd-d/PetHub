import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { Chip } from "react-native-elements";
import GradientText from "./colors/gradient-text";
import Database from "./database";
import homeStyle from "./styles/home-style";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "./colors";
import PropTypes from "prop-types";
import { getAgeFromTime } from "./util";

export default function Card({
  navigation,
  item,
  starIcon,
  username,
  getData,
}) {
  return (
    <TouchableHighlight
      activeOpacity={0.9}
      underlayColor={colors.white}
      onPress={() => navigation.navigate("AnimalProfile", { item })}
    >
      <View style={homeStyle.card}>
        <Image
          source={{ uri: item.images[0] }}
          resizeMode="cover"
          overflow="hidden"
          style={homeStyle.image}
        />
        <TouchableOpacity
          style={homeStyle.star}
          onPress={() =>
            starIcon === "star"
              ? Database.removeSaved(item.id, username).then(getData())
              : Database.setSaved(item.id, username).then(getData())
          }
        >
          <Ionicons name={starIcon} size={45} color={colors.starYellow} />
        </TouchableOpacity>
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
    </TouchableHighlight>
  );
}

Card.propTypes = {
  navigation: PropTypes.object.isRequired,
  item: PropTypes.object,
  starIcon: PropTypes.string,
  username: PropTypes.string,
  getData: PropTypes.func,
};
