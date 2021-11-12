import React from "react";
import { FlatList, Image, Text, TextInput, View } from "react-native";
import { ButtonGroup, Chip, SearchBar } from "react-native-elements";

import GradientText from "../colors/gradient-text";
import Database from "../database";
import colors from "../colors";
import standardStyle from "../styles/standard-style";
import searchStyle from "../styles/search-style";
import { getAgeFromTime } from "../util";

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
              {getAgeFromTime(new Date(item.birthDate)) + " y/o"}
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
      yearMin: "",
      yearMax: "",
    };
  }

  checkIsInsideAge(age) {
    let returnVal = false;

    if (this.state.yearMin === "") {
      returnVal = true;
    } else {
      returnVal = this.state.yearMin <= age;
    }

    if (this.state.yearMax === "") {
      return returnVal && true;
    } else {
      return returnVal && this.state.yearMax >= age;
    }
  }

  getData() {
    Database.getItem("data").then((data) => {
      this.setState({
        homeData: data.filter((inner) => {
          if (
            !inner.name.toLowerCase().includes(this.state.search.toLowerCase())
          ) {
            return false;
          }

          if (this.getSelectedGender() !== "any") {
            if (!(inner.gender.toLowerCase() === this.getSelectedGender())) {
              return false;
            }
          }

          return this.checkIsInsideAge(
            getAgeFromTime(new Date(inner.birthDate))
          );
        }),
      });
    });
  }

  getSelectedGender() {
    return genderButtons[this.state.selectedIndex].toLowerCase();
  }

  componentDidMount() {
    this.getData();
  }

  Refresh() {
    this.setState({ isFetching: true });
    this.getData();
    this.setState({ isFetching: false });
  }

  render() {
    return (
      <FlatList
        ListHeaderComponent={
          <View style={searchStyle.container}>
            <SearchBar
              placeholder={"Search"}
              value={this.state.search}
              onChangeText={(search) => {
                this.setState({ search });
                this.Refresh();
              }}
              searchIcon={{ color: colors.pethubPink }}
              clearIcon={{ color: colors.pethubPink }}
              inputStyle={searchStyle.searchBarInput}
              containerStyle={searchStyle.searchBarContainer}
              inputContainerStyle={searchStyle.searchBarInputContainer}
              leftIconContainerStyle={searchStyle.searchBarLeftIconContainer}
              rightIconContainerStyle={searchStyle.searchBarRightIconContainer}
            />
            <ButtonGroup
              selectedIndex={this.state.selectedIndex}
              onPress={(selectedIndex) => {
                this.setState({ selectedIndex });
                this.Refresh();
              }}
              buttons={genderButtons}
              containerStyle={standardStyle.genderContainer}
              buttonStyle={standardStyle.genderButtonDisabled}
              innerBorderStyle={standardStyle.genderBorder}
              selectedButtonStyle={standardStyle.genderButton}
              textStyle={standardStyle.buttonTextBold}
            />
            <View style={searchStyle.inputContainer}>
              <TextInput
                style={searchStyle.input}
                value={this.state.yearMin}
                placeholder="Minimum age (in years) "
                onChangeText={(yearMin) => {
                  this.setState({ yearMin });
                  this.Refresh();
                }}
                keyboardType="numeric"
              />
              <TextInput
                style={searchStyle.input}
                value={this.state.yearMax}
                placeholder="Maximum age (in years) "
                onChangeText={(yearMax) => {
                  this.setState({ yearMax });
                  this.Refresh();
                }}
                keyboardType="numeric"
              />
            </View>
          </View>
        }
        style={searchStyle.container}
        data={this.state.homeData}
        extraData={this.state.homeData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        refreshing={this.state.isFetching}
        onRefresh={() => this.Refresh()}
      />
    );
  }
}
