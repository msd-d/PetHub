import React from "react";
import { Text, View, Image, FlatList } from "react-native";
import { Chip, ButtonGroup, SearchBar } from "react-native-elements";
import GradientText from "../colors/gradient-text";
import Database from "../database";
import searchStyle from "../styles/search-style";
import postStyle from "../styles/post-style";

const renderItem = ({ item }) => (
  <View style={searchStyle.card}>
    <Image
      source={{ uri: item.images[0] }}
      resizeMode="cover"
      overflow="hidden"
      style={searchStyle.image}
    />
    <View style={searchStyle.cardContent}>
      <Text style={searchStyle.name}>{item.name}</Text>
      <View style={searchStyle.chipBox}>
        <Chip
          title={
            <GradientText style={searchStyle.chipText}>
              {item.breeds.length > 1 ? "Mixed" : item.breeds[0]}
            </GradientText>
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
              {new Date().getFullYear() - item.birthDate.year + " y/o"}
            </GradientText>
          }
          titleStyle={searchStyle.chipText}
          buttonStyle={searchStyle.chip}
        />
      </View>
    </View>
  </View>
);

const genderButtons = ["Any", "Male", "Female"];
export default class SearchScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      homeData: [],
      isFetching: false,
      selectedIndex: 0,
      search: "",
    };
    this.updateIndex = this.updateIndex.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }

  updateSearch(search) {
    this.setState({ search });
  }

  getData() {
    Database.getItem("data").then((data) => this.setState({ homeData: data }));
  }

  componentDidMount() {
    this.getData();
  }

  onRefresh() {
    this.setState({ isFetching: true });
    this.getData();
    this.setState({ isFetching: false });
  }

  render() {
    return (
      <View style={searchStyle.container}>
        <SearchBar
          style={searchStyle.input}
          placeholder={"Search"}
          value={this.state.search}
          onChangeText={this.updateSearch}
        />
        <ButtonGroup
          selectedIndex={this.state.selectedIndex}
          onPress={this.updateIndex}
          buttons={genderButtons}
          containerStyle={postStyle.genderContainer}
          buttonStyle={postStyle.genderButtonDisabled}
          innerBorderStyle={postStyle.genderBorder}
          selectedButtonStyle={postStyle.genderButton}
          textStyle={postStyle.whl2}
        />
        <FlatList
          data={this.state.homeData}
          extraData={this.state.homeData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          refreshing={this.state.isFetching}
          onRefresh={() => this.onRefresh()}
        />
      </View>
    );
  }
}
