import React, { useContext, useState, useEffect } from "react";
import { Text, View, Image, FlatList, TouchableOpacity } from "react-native";
import { Chip } from "react-native-elements/dist/buttons/Chip";
import GradientText from "../colors/gradient-text";
import Database from "../database";
import saveStyle from "../styles/save-style";
import AppContext from "../AppContext";
import PropTypes from "prop-types";

const RenderSaveScreen = ({ item, username }) => (
  <View style={saveStyle.card}>
    <Image
      source={{ uri: item.images[0] }}
      resizeMode="cover"
      overflow="hidden"
      style={saveStyle.image}
    />
    <View style={saveStyle.removeBox}>
      <TouchableOpacity
        style={saveStyle.remove}
        onPress={() => {
          Database.removeSaved(item.id, username);
        }}
      />
    </View>
    <View style={saveStyle.cardContent}>
      <Text style={saveStyle.name}>{item.name}</Text>

      <View style={saveStyle.chipBox}>
        <Chip
          title={
            <GradientText style={saveStyle.chipText}>
              {item.breeds.length > 1 ? "Mixed" : item.breeds[0]}
            </GradientText>
          }
          titleStyle={saveStyle.chipText}
          buttonStyle={saveStyle.chip}
        />
        <Chip
          title={
            <GradientText style={saveStyle.chipText}>
              {item.gender}
            </GradientText>
          }
          titleStyle={saveStyle.chipText}
          buttonStyle={saveStyle.chip}
        />
        <Chip
          title={
            <GradientText style={saveStyle.chipText}>
              {new Date().getFullYear() - item.birthDate.year + " y/o"}
            </GradientText>
          }
          titleStyle={saveStyle.chipText}
          buttonStyle={saveStyle.chip}
        />
      </View>
    </View>
  </View>
);

RenderSaveScreen.propTypes = {
  item: PropTypes.object,
  username: PropTypes.string,
};

export default function SavedScreen() {
  const myContext = useContext(AppContext);
  const [savedData, setSavedData] = useState([]);
  const [fetching, setFetching] = useState(false);

  const RenderItem = ({ item }) => {
    return <RenderSaveScreen item={item} username={myContext.userID} />;
  };

  RenderItem.propTypes = {
    item: PropTypes.object,
  };

  const getData = async () => {
    const data = await Database.getItem("data");
    const saved = await Database.getSaved(myContext.userID);

    const filtered = data.filter((item) => saved.includes(item.id));
    setSavedData(filtered);
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
    <FlatList
      data={savedData}
      extraData={savedData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={RenderItem}
      refreshing={fetching}
      onRefresh={() => onRefresh()}
    />
  );
}
