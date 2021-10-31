import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, Platform, ScrollView, TouchableOpacity } from 'react-native';
import { Button, ButtonGroup, Input } from 'react-native-elements';
import config from '../config';
import * as ImagePicker from 'expo-image-picker';
import GradientText from '../colors/gradient-text';

import Ionicons from '@expo/vector-icons/Ionicons';
import { TextInput } from 'react-native';

import Conditions from '../conditions';
import Breeds from '../breeds';

import DateTimePicker from '@react-native-community/datetimepicker';

import PropTypes from 'prop-types';
import generelPositioning from '../styles/generel-positioning';

const viewText = {
  images: 'Images',
  gender: 'Gender',
  dob: 'Day Of Birth',
  name: 'Name',
  breed: 'Breed',
  description: 'Description',
  location: 'Location',
  measurements: 'Measurements',
  conditions: 'Conditions',
}

const ImageBoxes = () => {
  const [images, setImages] = useState([]);

  const ImageBox = (props) => {

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
        allowsMultipleSelection: true,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.cancelled) {
        if (typeof images[props.number] == 'undefined') {
          setImages(images => [...images, result.uri]);
        } else {
          const updatedImages = [...images];
          updatedImages[props.number] = result.uri;
          setImages(updatedImages);
        }
      }
    };

    const longPress = () => {
      if (typeof images[props.number] !== 'undefined') {
        setImages(images => images.filter((image, i) => i !== props.number));
      }
    };


    return (
      <TouchableOpacity style={styles.button} onPress={pickImage} onLongPress={longPress}>
        <View style={styles.icon}>
          <Ionicons
            name="add-circle-outline"
            size={30}
            color="white"
          />
        </View>
        <Image source={{ uri: images[props.number] }} style={styles.image} />
      </TouchableOpacity>
    );
  }

  ImageBox.propTypes = {
    number: PropTypes.number
  }

  return (
    <View style={generelPositioning.flexRowWrap}>
      <ImageBox number={0} />
      <ImageBox number={1} />
      <ImageBox number={2} />
      <ImageBox number={3} />
      <ImageBox number={4} />
      <ImageBox number={5} />
    </View>
  );
}



function PostScreen() {
  const genderButtons = ['Male', 'Female']
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = () => {
    setShow(true);
  };

  return (
    <ScrollView style={styles.scrollview}>
      <View style={generelPositioning.flexRowMargin}>
        <Button
          buttonStyle={styles.postButton}
          title='Post animal'
        />
        <Button
          buttonStyle={styles.cancelButton}
          title='Cancel'
        />
      </View>
      <GradientText style={styles.chipText}>{viewText.images}</GradientText>
      <ImageBoxes />
      <GradientText style={styles.chipText}>{viewText.gender}</GradientText>
      <ButtonGroup
        buttons={genderButtons}
      />
      <GradientText style={styles.chipText}>{viewText.dob}</GradientText>
      <View style={generelPositioning.flexRowMargin}>
        <Button onPress={showMode} title={date.getDate()} />
        <Button onPress={showMode} title={date.getMonth()} />
        <Button onPress={showMode} title={date.getFullYear()} />
        {show && (
          <DateTimePicker
            value={date}
            onChange={onChange}
          />
        )}
      </View>

      <GradientText style={styles.chipText}>{viewText.name}</GradientText>
      <Input></Input>
      <GradientText style={styles.chipText}>{viewText.breed}</GradientText>
      <Breeds />
      <GradientText style={styles.chipText}>{viewText.description}</GradientText>
      <TextInput
        editable={true}
        maxLength={200}
        multiline={true}
        numberOfLines={4}
        placeholder='Write something nice about the animal...'
        style={styles.description}
      />

      <GradientText style={styles.chipText}>{viewText.location}</GradientText>
      <TextInput style={styles.input}
        placeholder={'Enter the location of your animal'}
      />
      <GradientText style={styles.chipText}>{viewText.measurements}</GradientText>
      <View>
        <View style={generelPositioning.flexRowMargin}>
          <Text>Weight</Text>
          <TextInput style={styles.input2}
            placeholder={'Enter weight in kg'}
            keyboardType={'decimal-pad'}
          />
        </View>
        <View style={generelPositioning.flexRowMargin}>
          <Text>Height</Text>
          <TextInput style={styles.input2}
            placeholder={'Enter height in kg'}
            keyboardType={'decimal-pad'}
          />
        </View>
        <View style={generelPositioning.flexRowMargin}>
          <Text>Length</Text>
          <TextInput style={styles.input2}
            placeholder={'Enter length in kg'}
            keyboardType={'decimal-pad'}
          />
        </View>
      </View>
      <GradientText style={styles.chipText}>{viewText.conditions}</GradientText>
      <Conditions />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollview:{
    flex: 1, backgroundColor: 'white' 
  },
  postButton:{
    width: config.deviceWidth * 0.4, borderRadius: 99
  },
  cancelButton:{
    width: config.deviceWidth * 0.4, borderRadius: 99 
  },
  description:{
    height: config.deviceWidth * 0.3, marginHorizontal: config.deviceWidth * 0.05, marginTop: 5, backgroundColor: 'rgba(234, 234, 234, 1)', borderRadius: 10, textAlignVertical: 'top', padding: 5 
  },
  input:{
    marginHorizontal: config.deviceWidth * 0.05, backgroundColor: 'rgba(234, 234, 234, 1)', borderRadius: 8 
  },
  input2:{
    backgroundColor: 'rgba(234, 234, 234, 1)' 
    },
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