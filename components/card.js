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
import cardStyle from "./styles/card-style";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "./colors";
import PropTypes from "prop-types";
import { getAgeFromTime } from "./util";

export default function Card({ navigation, item, starIcon, userID, refresh }) {
  return (
    <TouchableHighlight
      activeOpacity={0.9}
      underlayColor={colors.white}
      onPress={() => navigation.navigate("AnimalProfile", { item })}
    >
      <View style={cardStyle.card}>
        <Image
          source={{ uri: item.images[0] }}
          resizeMode="cover"
          overflow="hidden"
          style={cardStyle.image}
        />
        <TouchableOpacity
          style={cardStyle.star}
          onPress={() =>
            starIcon === "star"
              ? Database.removeSaved(item.id, userID).then(refresh)
              : Database.setSaved(item.id, userID).then(refresh)
          }
        >
          <Ionicons name={starIcon} size={35} color={colors.starGrey} />
        </TouchableOpacity>
        <View style={cardStyle.cardContent}>
          <Text style={cardStyle.name}>{item.name}</Text>
          <View style={cardStyle.chipBox}>
            <Chip
              title={
                <GradientText style={cardStyle.chipText}>
                  {item.breeds.length > 1 ? "Mixed" : item.breeds[0]}
                </GradientText>
              }
              titleStyle={cardStyle.chipText}
              buttonStyle={cardStyle.chip}
            />
            <Chip
              title={
                <GradientText style={cardStyle.chipText}>
                  {item.gender}
                </GradientText>
              }
              titleStyle={cardStyle.chipText}
              buttonStyle={cardStyle.chip}
            />
            <Chip
              title={
                <GradientText style={cardStyle.chipText}>
                  {getAgeFromTime(new Date(item.birthDate)) + " y/o"}
                </GradientText>
              }
              titleStyle={cardStyle.chipText}
              buttonStyle={cardStyle.chip}
            />
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
}

Card.propTypes = {
  navigation: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
  starIcon: PropTypes.string.isRequired,
  userID: PropTypes.string,
  refresh: PropTypes.func.isRequired,
};
