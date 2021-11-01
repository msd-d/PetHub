import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { Text, View, Image, FlatList } from "react-native";
import { Chip } from "react-native-elements";
import GradientText from "../colors/gradient-text";
import Database from "../database";
import homeStyle from "../styles/home-style";

const renderItem = ({ item }) => (
  <View style={homeStyle.card}>
    <Image
      source={item.image}
      resizeMode="cover"
      overflow="hidden"
      style={homeStyle.image}
    />
    <View style={homeStyle.cardContent}>
      <Text style={homeStyle.name}>{item.name}</Text>
      <View style={homeStyle.chipBox}>
        <Chip
          title={
            <GradientText style={homeStyle.chipText}>{item.breed}</GradientText>
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
              {item.age + " years old"}
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
