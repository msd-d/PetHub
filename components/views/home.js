import React from 'react';
import { Text, View, Image, FlatList, StyleSheet } from 'react-native';
import { Chip } from 'react-native-elements';
import config from '../config';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import {textColors, chipColors} from '../colors/home-colors';
import { ViewPropTypes } from 'react-native';

const apiData = [
  {
    id: 1,
    name: "Daisy",
    breed: 'Mixed',
    gender: 'Female',
    age: 5,
    image: require("../../images/image1.png"),
  },
  {
    id: 2,
    name: "Daisy2",
    breed: 'Mixed',
    gender: 'Female',
    age: 5,
    image: require("../../images/image1.png"),
  },
  {
    id: 3,
    name: "Gustav",
    breed: 'Alcholic',
    gender: 'Female',
    age: 5,
    image: require("../../images/image1.png"),
  },
];

const GradientText = (props) => {
  GradientText.propTypes = {
    style: ViewPropTypes.style,
  }
  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient
        colors={[ "rgba(232, 193, 171, 1)","rgba(223, 122, 153, 1)"]}
        start={{ x: -1, y: -1 }}
        end={{ x: 1, y: 3 }}
      >
        <Text {...props} style={[props.style, styles.gradientText]} />
      </LinearGradient>
    </MaskedView>
  );
};

const renderItem = ({ item }) => (
  <View style={styles.card}>
    <Image
      source={item.image}
      resizeMode="cover"
      overflow='hidden'
      style={styles.image}
    />
    <View style={styles.cardContent}>
      <Text style={styles.name}>{item.name}</Text>
      <View style={styles.chipBox}>
        <Chip
          title={<GradientText style={styles.chipText}>{item.breed}</GradientText>}
          titleStyle={styles.chipText}
          buttonStyle={styles.chip}
        />
        <Chip
          title={<GradientText style={styles.chipText}>{item.gender}</GradientText>}
          titleStyle={styles.chipText}
          buttonStyle={styles.chip}
        />
        <Chip
          title={<GradientText style={styles.chipText}>{item.age + " years old"}</GradientText>}
          titleStyle={styles.chipText}
          buttonStyle={styles.chip}
        />
      </View>
    </View>
  </View>
);

function HomeScreen() {
  return (
    <FlatList
      data={apiData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    display: 'flex',
    width: config.deviceWidth * 0.9,
    marginLeft: config.deviceWidth * 0.05,
    height: config.deviceWidth * 0.9,
    marginTop: 15,
    borderRadius: 23
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    bottom: 1,
    alignSelf: 'center',
    width: config.deviceWidth * 0.8,
    height: 100,
  },
  name: {
    fontFamily: 'Inter_700Bold',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 22,
    color: textColors.cardName,
    marginBottom: 10,
  },
  chip: {
    backgroundColor: chipColors.chipBackground,
    marginRight: 10,
    borderRadius: 8
  },
  chipText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 12,
    height: 20
  },
  chipBox: { 
    display: 'flex', 
    flexDirection: 'row' 
  },
  image: { 
    width: undefined, 
    height: '100%', 
    overflow: 'hidden', 
    borderRadius: 23, 
  },
  gradientText: { 
    opacity: 0,
  }
})


export default HomeScreen;