import React, { useState, useEffect } from 'react';
import { View, Image, Text, Platform, ScrollView, TouchableOpacity } from 'react-native';
import { Button, ButtonGroup, Input } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import GradientText from '../colors/gradient-text';

import Ionicons from '@expo/vector-icons/Ionicons';
import { TextInput } from 'react-native';

import Conditions from '../conditions';
import Breeds from '../breeds';

import DateTimePicker from '@react-native-community/datetimepicker';

import PropTypes from 'prop-types';
import generelPositioning from '../styles/generel-positioning';
import postStyle from '../styles/post-style';

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
      <TouchableOpacity style={postStyle.button} onPress={pickImage} onLongPress={longPress}>
        <View style={postStyle.icon}>
          <Ionicons
            name="add-circle-outline"
            size={30}
            color="white"
          />
        </View>
        <Image source={{ uri: images[props.number] }} style={postStyle.image} />
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
    <ScrollView style={postStyle.scrollview}>
      <View style={generelPositioning.flexRowMargin}>
        <Button
          buttonStyle={postStyle.postButton}
          title='Post animal'
        />
        <Button
          buttonStyle={postStyle.cancelButton}
          title='Cancel'
        />
      </View>
      <GradientText style={postStyle.chipText}>{viewText.images}</GradientText>
      <ImageBoxes />
      <GradientText style={postStyle.chipText}>{viewText.gender}</GradientText>
      <ButtonGroup
        buttons={genderButtons}
      />
      <GradientText style={postStyle.chipText}>{viewText.dob}</GradientText>
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

      <GradientText style={postStyle.chipText}>{viewText.name}</GradientText>
      <Input></Input>
      <GradientText style={postStyle.chipText}>{viewText.breed}</GradientText>
      <Breeds />
      <GradientText style={postStyle.chipText}>{viewText.description}</GradientText>
      <TextInput
        editable={true}
        maxLength={200}
        multiline={true}
        numberOfLines={4}
        placeholder='Write something nice about the animal...'
        style={postStyle.description}
      />

      <GradientText style={postStyle.chipText}>{viewText.location}</GradientText>
      <TextInput style={postStyle.input}
        placeholder={'Enter the location of your animal'}
      />
      <GradientText style={postStyle.chipText}>{viewText.measurements}</GradientText>
      <View>
        <View style={generelPositioning.flexRowMargin}>
          <Text>Weight</Text>
          <TextInput style={postStyle.input2}
            placeholder={'Enter weight in kg'}
            keyboardType={'decimal-pad'}
          />
        </View>
        <View style={generelPositioning.flexRowMargin}>
          <Text>Height</Text>
          <TextInput style={postStyle.input2}
            placeholder={'Enter height in kg'}
            keyboardType={'decimal-pad'}
          />
        </View>
        <View style={generelPositioning.flexRowMargin}>
          <Text>Length</Text>
          <TextInput style={postStyle.input2}
            placeholder={'Enter length in kg'}
            keyboardType={'decimal-pad'}
          />
        </View>
      </View>
      <GradientText style={postStyle.chipText}>{viewText.conditions}</GradientText>
      <Conditions />
    </ScrollView>
  );
}

export default PostScreen;