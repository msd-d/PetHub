import React from "react";
import { Text, View, Image, FlatList, TouchableOpacity } from "react-native";
import { Chip } from "react-native-elements/dist/buttons/Chip";
import GradientText from "../colors/gradient-text";
import Database from "../database";
import saveStyle from "../styles/save-style";

const renderSaveScreen = ({ item }) => (
  <View style={saveStyle.card}>
    <Image
      source={{ uri: item.images[0] }}
      resizeMode="cover"
      overflow="hidden"
      style={saveStyle.image}
    />
    <View style={saveStyle.cardContent}>
      <Text style={saveStyle.name}>{item.name}</Text>
      <TouchableOpacity
        style={saveStyle.remove}
        onPress={() => remove(item.id)}
      />
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

function remove(id) {
  console.log("Remove " + id);
}

export default class SavedScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      savedData: [],
      isFetching: false,
    };
  }

  getData() {
    Database.getItem("data").then((data) => {
      let filtered = data.filter((items) => items.saved);
      this.setState({ savedData: filtered });
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
        data={this.state.savedData}
        extraData={this.state.savedData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderSaveScreen}
        refreshing={this.state.isFetching}
        onRefresh={() => this.onRefresh()}
      />
    );
  }
}
