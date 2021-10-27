import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, Platform, ScrollView } from 'react-native';
import { Button, ButtonGroup } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import config from '../config';
import * as ImagePicker from 'expo-image-picker';
import GradientText from '../colors/general';

import Ionicons from '@expo/vector-icons/Ionicons';

function ImageBox() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };


  return (
    <TouchableOpacity style={styles.button} onPress={pickImage}>
      <View style={styles.icon}>
        <Ionicons
          name="add-circle-outline"
          size={30}
          color="white"
        />
      </View>
      <Image source={{ uri: image }} style={styles.image} />
    </TouchableOpacity>
  );
}

function PostScreen() {
  const genderButtons = ['Male', 'Female']

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Button
          buttonStyle={{ width: config.deviceWidth * 0.4, marginLeft: config.deviceWidth * 0.05, borderRadius: 99 }}
          title='Post animal'
          titleStyle={{ fontSize: 12 }}
        />
        <Button
          buttonStyle={{ width: config.deviceWidth * 0.4, marginLeft: config.deviceWidth * 0.1, borderRadius: 99 }}
          title='Cancel'
          titleStyle={{ fontSize: 12 }}
        />
      </View>
      <GradientText style={styles.chipText}>Images</GradientText>
      <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
        <ImageBox />
        <ImageBox />
        <ImageBox />
        <ImageBox />
        <ImageBox />
        <ImageBox />
      </View>
      <GradientText style={styles.chipText}>Gender</GradientText>
      <ButtonGroup
        buttons={genderButtons}
      />
      <GradientText style={styles.chipText}>Date of Birth</GradientText>
      <GradientText style={styles.chipText}>Name</GradientText>
      <GradientText style={styles.chipText}>Breed</GradientText>
      <GradientText style={styles.chipText}>Description</GradientText>
      <GradientText style={styles.chipText}>Location</GradientText>
      <GradientText style={styles.chipText}>Measurements</GradientText>
      <GradientText style={styles.chipText}>Conditions</GradientText>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: undefined,
    height: '100%',
    overflow: 'hidden',
    borderRadius: 12,
  },
  button: {
    width: config.deviceWidth * 0.3,
    height: config.deviceWidth * 0.3,
    borderRadius: 12,
    marginLeft: config.deviceWidth * 0.025,
    marginTop: config.deviceWidth * 0.025,
    backgroundColor: 'rgba(234, 234, 234, 1)',
  },
  icon: {
    width: '100%',
    height: '100%',
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chipText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 25,
    height: 35,
  },
  gradientButton: {
    width: config.deviceWidth * 0.4,
    marginLeft: config.deviceWidth * 0.05,
  }
})


export default PostScreen;