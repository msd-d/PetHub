import React from "react";
import { Text, View, Image, FlatList } from "react-native";
import { Chip } from "react-native-elements";
import GradientText from "../colors/gradient-text";
import Database from "../database";
import searchStyle from "../styles/search-style";

const renderItem = ({ item }) => (
  <View style={searchStyle.card}>
    <Image
      source={item.image}
      resizeMode="cover"
      overflow="hidden"
      style={searchStyle.image}
    />
    <View style={searchStyle.cardContent}>
      <Text style={searchStyle.name}>{item.name}</Text>
      <View style={searchStyle.chipBox}>
        <Chip
          title={
            <GradientText style={searchStyle.chipText}>{item.breed}</GradientText>
          }
          titleStyle={searchStyle.chipText}
          buttonStyle={searchStyle.chip}
        />
        <Chip
          title={
            <GradientText style={searchStyle.chipText}>
              {item.gender}
            </GradientText>
          }
          titleStyle={searchStyle.chipText}
          buttonStyle={searchStyle.chip}
        />
        <Chip
          title={
            <GradientText style={searchStyle.chipText}>
              {item.age + " years old"}
            </GradientText>
          }
          titleStyle={searchStyle.chipText}
          buttonStyle={searchStyle.chip}
        />
      </View>
    </View>
  </View>
);

export default class SearchScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      homeData: [],
    };
  }

  componentDidMount() {
    Database.getItem("home").then((data) => this.setState({ homeData: data }));
  }

  render() {
    return (
      <FlatList
        data={this.state.homeData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        extraData={this.state.homeData}
      />
    );
  }
}
