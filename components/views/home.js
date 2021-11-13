import React, { useContext, useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import Database from "../database";
import AppContext from "../AppContext";
import PropTypes from "prop-types";
import postStyle from "../styles/post-style";
import Card from "../card";

const ListEmptyComponent = () => <View style={postStyle.empty}></View>;

export default function HomeScreen({ navigation }) {
  const myContext = useContext(AppContext);
  const [homeData, setHomeData] = useState([]);
  const [savedData, setSavedData] = useState([]);
  const [fetching, setFetching] = useState(false);

  const RenderItem = ({ item }) => {
    const starIcon = savedData.includes(item.id) ? "star" : "star-outline";
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
    setHomeData(data);
    const saved = await Database.getSaved(myContext.userID);
    setSavedData(saved);
  };

  const onRefresh = async () => {
    setFetching(true);
    await getData();
    setFetching(false);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [myContext.dataChanged]);

  return (
    <View>
      <FlatList
        data={homeData}
        extraData={homeData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={RenderItem}
        refreshing={fetching}
        onRefresh={() => onRefresh()}
        ListEmptyComponent={ListEmptyComponent}
      />
    </View>
  );
}

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};
