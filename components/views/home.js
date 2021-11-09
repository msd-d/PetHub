import React, { useContext, useEffect, useState } from "react";
import { Text, View, Image, FlatList, TouchableOpacity } from "react-native";
import { Chip } from "react-native-elements";
import GradientText from "../colors/gradient-text";
import Database from "../database";
import homeStyle from "../styles/home-style";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "../colors";
import AppContext from "../AppContext";
import PropTypes from "prop-types";
import postStyle from "../styles/post-style";

const ListEmptyComponent = () => <View style={postStyle.empty}></View>;

const Item = ({ item, starIcon }) => (
  <View style={homeStyle.card}>
    <Image
      source={{ uri: item.images[0] }}
      resizeMode="cover"
      overflow="hidden"
      style={homeStyle.image}
    />
    <TouchableOpacity
      style={homeStyle.star}
      onPress={() => console.log("Favorite")}
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
              {new Date().getFullYear() - item.birthDate.year + " y/o"}
            </GradientText>
          }
          titleStyle={homeStyle.chipText}
          buttonStyle={homeStyle.chip}
        />
      </View>
    </View>
  </View>
);

Item.propTypes = {
  item: PropTypes.object,
  starIcon: PropTypes.string,
};

export default function HomeScreen() {
  const myContext = useContext(AppContext);
  const [homeData, setHomeData] = useState([]);
  const [savedData, setSavedData] = useState([]);
  const [fetching, setFetching] = useState(false);

  const RenderItem = ({ item }) => {
    const starIcon = savedData.includes(item.id) ? "star" : "star-outline"; // todo: check if saved has it.
    return <Item item={item} starIcon={starIcon} />;
  };

  RenderItem.propTypes = {
    item: PropTypes.object,
  };

  const getData = () => {
    Database.getItem("data").then((data) => setHomeData(data));
    Database.getSaved(myContext.UserID).then((data) => setSavedData(data));
  };

  const onRefresh = () => {
    setFetching(true);
    getData();
    setFetching(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      <FlatList
        data={homeData}
        extraData={homeData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={RenderItem}
        refreshing={fetching}
        onRefresh={() => onRefresh}
        ListEmptyComponent={ListEmptyComponent}
      />
    </View>
  );
}
