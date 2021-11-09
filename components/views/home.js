import React from "react";
import { Text, View, Image, FlatList } from "react-native";
import { Chip } from "react-native-elements";
import GradientText from "../colors/gradient-text";
import Database from "../database";
import homeStyle from "../styles/home-style";
import { getAgeFromTime } from "../util";

const renderItem = ({ item }) => (
  <View style={homeStyle.card}>
    <Image
      source={{ uri: item.images[0] }}
      resizeMode="cover"
      overflow="hidden"
      style={homeStyle.image}
    />
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
              {getAgeFromTime(new Date(item.birthDate)) + " y/o"}
            </GradientText>
          }
          titleStyle={homeStyle.chipText}
          buttonStyle={homeStyle.chip}
        />
      </View>
    </View>
  </View>
);

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      homeData: [],
      isFetching: false,
    };
  }

  getData() {
    Database.getItem("data").then((data) => this.setState({ homeData: data }));
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
        data={this.state.homeData}
        extraData={this.state.homeData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        refreshing={this.state.isFetching}
        onRefresh={() => this.onRefresh()}
      />
    );
  }
}
