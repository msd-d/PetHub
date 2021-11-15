import React from "react";
import PropTypes from "prop-types";
import CardList from "../cardList";

export default function HomeScreen({ navigation }) {
  return <CardList navigation={navigation} />;
}

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};
