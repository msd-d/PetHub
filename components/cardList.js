import React, { useState, useEffect, useContext } from "react";
import { View, FlatList } from "react-native";
import PropTypes from "prop-types";
import postStyle from "./styles/home-style";
import Card from "./card";
import AppContext from "./AppContext";
import Database from "./database";

const ListEmptyComponent = () => <View style={postStyle.empty}></View>;

export default function CardList({
  navigation,
  listHeaderComponent,
  filterList,
  searchItem,
}) {
  const [savedData, setSavedData] = useState([]);
  const [cardListData, setCardListData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const getData = async () => {
    const saved = await Database.getSaved(context.userID);
    setSavedData(saved);

    const data = await Database.getItem("data");
    if (filterList === undefined) {
      setCardListData(data);
    } else {
      setCardListData(
        data.filter((item) => {
          return !filterList.some((filter) => !filter(item, searchItem, saved));
        })
      );
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      onRefresh();
    });
    return unsubscribe;
  }, [navigation]);

  const onRefresh = async () => {
    setRefreshing(true);
    await getData();
    setRefreshing(false);
  };

  useEffect(() => {
    getData();
  }, [searchItem]);

  const context = useContext(AppContext);

  return (
    <FlatList
      ListHeaderComponent={listHeaderComponent}
      data={cardListData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Card
          navigation={navigation}
          item={item}
          starIcon={savedData.includes(item.id) ? "star" : "star-outline"}
          userID={context.userID}
          refresh={onRefresh}
        />
      )}
      refreshing={refreshing}
      onRefresh={() => onRefresh()}
      ListEmptyComponent={ListEmptyComponent}
    />
  );
}

CardList.propTypes = {
  navigation: PropTypes.object.isRequired,
  filterList: PropTypes.array,
  searchItem: PropTypes.any,
  listHeaderComponent: PropTypes.object,
};