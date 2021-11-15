import React, { useState } from "react";
import { TextInput, View } from "react-native";
import { ButtonGroup, SearchBar } from "react-native-elements";
import PropTypes from "prop-types";

import colors from "../colors";
import standardStyle from "../styles/standard-style";
import searchStyle from "../styles/search-style";
import { getAgeFromTime } from "../util";
import CardList from "../cardList";

export default function SearchScreen({ navigation }) {
  const genderButtons = ["Any", "Male", "Female"];
  const [search, setSearch] = useState({
    search: "",
    yearMin: "",
    yearMax: "",
    selectedGender: "Any",
  });
  const [yearMin, setYearMin] = useState("");
  const [yearMax, setYearMax] = useState("");
  const [selectedGender, setSelectedGender] = useState(0);

  const filterList = [
    // Name search.  TODO: A better version more fuzzy is needed.
    (item, search) => {
      return item.name.toLowerCase().includes(search.search.toLowerCase());
    },
    // Gender search
    (item, search) => {
      const gender = item.gender.toLowerCase();
      const searchGender = search.selectedGender.toLowerCase();

      if (searchGender === "any") {
        return true;
      }
      return gender === searchGender;
    },
    // Search Minimum years
    (item, search) => {
      if (search.yearMin === "") {
        return true;
      }
      return search.yearMin <= getAgeFromTime(new Date(item.birthDate));
    },
    // Search Maximum years
    (item, search) => {
      if (search.yearMax === "") {
        return true;
      }
      return search.yearMax >= getAgeFromTime(new Date(item.birthDate));
    },
  ];

  return (
    <CardList
      navigation={navigation}
      filterList={filterList}
      searchItem={search}
      listHeaderComponent={
        <View style={searchStyle.container}>
          <SearchBar
            placeholder={"Search"}
            value={search.search}
            onChangeText={(input) => {
              setSearch({ ...search, search: input });
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
            selectedIndex={selectedGender}
            onPress={(selectedIndex) => {
              setSelectedGender(selectedIndex);
              setSearch({
                ...search,
                selectedGender: genderButtons[selectedIndex],
              });
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
              value={yearMin}
              placeholder="Minimum age (in years) "
              onChangeText={(yearMin) => {
                setYearMin(yearMin);
                setSearch({ ...search, yearMin });
              }}
              keyboardType="numeric"
            />
            <TextInput
              style={searchStyle.input}
              value={yearMax}
              placeholder="Maximum age (in years) "
              onChangeText={(yearMax) => {
                setYearMax(yearMax);
                setSearch({ ...search, yearMax });
              }}
              keyboardType="numeric"
            />
          </View>
        </View>
      }
    />
  );
}

SearchScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};
