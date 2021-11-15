import React, { useContext, useState, useEffect } from "react";
import { FlatList } from "react-native";
import Database from "../database";
import saveStyle from "../styles/save-style";
import AppContext from "../AppContext";
import PropTypes from "prop-types";
import Card from "../card";

export default function SavedScreen({ navigation }) {
  const myContext = useContext(AppContext);
  const [savedData, setSavedData] = useState([]);
  const [fetching, setFetching] = useState(false);

  const RenderItem = ({ item }) => {
    const starIcon = "star";
    return (
      <Card
        navigation={navigation}
        item={item}
        starIcon={starIcon}
        username={myContext.userID}
        getData={getData}
      />
    );
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
      style={saveStyle.background}
    />
  );
}

SavedScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};
