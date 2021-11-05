import React from "react";
import { Text, View, Image, FlatList } from "react-native";
import Database from "../database";
import saveStyle from "../styles/save-style";

const renderSaveScreen = ({ item }) => (
  <View style={saveStyle.card}>
    <Text>{item.name}</Text>
    <Image
      source={{ uri: item.images[0] }}
      resizeMode="cover"
      overflow="hidden"
      style={saveStyle.image}
    />
    <View style={saveStyle.cardContent}>
      <Text>{item.name}</Text>
    </View>
  </View>
);

export default class SavedScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      SaveData: [],
      isFetching: false,
    };
  }

  getData() {
    Database.getItem("data").then((data) => {
      let filtered = data.filter(items => items.saved);
      this.setState({ savedData: data })
    });

    
  }

  onRefresh() {
    this.setState({ isFetching: true });
    this.getData();
    this.setState({ isFetching: false });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
        <FlatList
          data={this.state.SaveData}
          extraData={this.state.savedData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderSaveScreen}
          refreshing={this.state.isFetching}
          onRefresh={() => this.onRefresh()}
        />
    );
  }
}
