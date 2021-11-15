import React, { useState, useEffect, useContext } from "react";
import { View, FlatList } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import PropTypes from "prop-types";
import cardListStyle from "./styles/cardList-style";
import Card from "./card";
import AppContext from "./AppContext";
import Database from "./database";

const ListEmptyComponent = () => <View style={cardListStyle.empty}></View>;

export default function CardList({
  navigation,
  listHeaderComponent,
  filterList,
  searchItem,
}) {
  const [savedData, setSavedData] = useState([]);
  const [cardListData, setCardListData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const context = useContext(AppContext);

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

  useFocusEffect(
    React.useCallback(() => {
      onRefresh();

      return () => onRefresh();
    }, [context.userID])
  );

  const onRefresh = async () => {
    setRefreshing(true);
    await getData();
    setRefreshing(false);
  };

  useEffect(() => {
    getData();
  }, [searchItem]);

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
      style={cardListStyle.background}
    />
  );
}

CardList.propTypes = {
  navigation: PropTypes.object.isRequired,
  filterList: PropTypes.array,
  searchItem: PropTypes.any,
  listHeaderComponent: PropTypes.object,
};
