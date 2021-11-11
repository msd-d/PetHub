import React from "react";
import { Text, View, Image, ScrollView, SafeAreaView } from "react-native";
import styles from "../styles/animalProfile-style";
import config from "../config";
import PropTypes from "prop-types";

const AnimalScreen = ({ route }) => {
  const item = route.params.item;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.header}>Animal view</Text>
        <MyCarousel entries={item.images} />
        <Text style={styles.name}>{item.name}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

AnimalScreen.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};

import Carousel from "react-native-snap-carousel";

export class MyCarousel extends React.Component {
  constructor({ entries }) {
    super();
    this.state = {
      entries: entries,
    };
  }
  render() {
    return (
      <Carousel
        ref={(c) => {
          this._carousel = c;
        }}
        data={this.state.entries}
        renderItem={({ item }) => {
          return (
            <View style={styles.card}>
              <Image source={{ uri: item }} style={styles.image} />
            </View>
          );
        }}
        sliderWidth={config.deviceWidth}
        itemWidth={config.deviceWidth}
      />
    );
  }
}

MyCarousel.propTypes = {
  entries: PropTypes.array,
};

export default AnimalScreen;
