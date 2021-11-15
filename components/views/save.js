import React from "react";
import PropTypes from "prop-types";
import CardList from "../cardList";

export default function SavedScreen({ navigation }) {
  const filterList = [
    // Filter out Saved
    (item, _search, saved) => {
      return saved.includes(item.id);
    },
  ];

  return <CardList navigation={navigation} filterList={filterList} />;
}

SavedScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};
