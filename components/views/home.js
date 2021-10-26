import React from 'react';
import { Text, View, Image, FlatList, StyleSheet } from 'react-native';
import { Chip } from 'react-native-elements';
import config from '../config';
import LinearGradient from 'react-native-linear-gradient';

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
    name: "Daisy",
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

const renderItem = ({ item, index }) => (
  <View style={styles.card}>
    <Image
      source={item.image}
      resizeMode="cover"
      overflow='hidden'
      style={{ width: undefined, height: '100%', overflow: 'hidden', borderRadius: 23, }}
    />
    <View style={styles.cardContent}>
      <Text style={styles.name}>Test</Text>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <Chip
          title={item.breed}
          type='outline'
          titleStyle={styles.chipText}
          buttonStyle={styles.tag}
        />
        <Chip
          title={item.gender}
          type='outline'
          titleStyle={styles.chipText}
          buttonStyle={styles.tag}
        />
        <Chip
          title={item.age + " years old"}
          type='outline'
          titleStyle={styles.chipText}
          buttonStyle={styles.tag}
        />
      </View>
      <LinearGradient
        start={{ x: 0.0, y: 0.0 }}
        end={{ x: 0.0, y: 1.0 }}
        locations={[0.0, 1.0]}
        colors={['#ffffff40', '#fffffff5']} //<-- last 2 chars from color control the opacity
        useViewFrame={false}
        style={styles.gradient}
      />
      <View>
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
    backgroundColor: 'red',
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
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    marginBottom: 10,
  },
  tag: {
    backgroundColor: 'white',
    color: 'white',
    marginRight: 10,
    borderRadius: 8
  },
  chipText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 12,
    color: 'red',
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
})


export default HomeScreen;