import React, { useState, useEffect } from 'react';
import { View, Image, Text, Platform, ScrollView, TouchableOpacity } from 'react-native';
import { Button, ButtonGroup } from 'react-native-elements';
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
import GradientButton from '../colors/gradient-button';

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
  const [gender, setGender] = useState(0);

  const onGenderChange = (index) => {
    setGender(index)
  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = () => {
    setShow(true);
  };

  return (
    <ScrollView style={postStyle.scrollview}
      contentContainerStyle={postStyle.scrollviewContainer}
    >
      <GradientText style={postStyle.chipText}>{viewText.images}</GradientText>
      <ImageBoxes />
      <GradientText style={postStyle.chipText}>{viewText.gender}</GradientText>
      <ButtonGroup
        selectedIndex={gender}
        onPress={onGenderChange}
        buttons={genderButtons}
        containerStyle={postStyle.genderContainer}
        buttonStyle={postStyle.genderButtonDisabled}
        innerBorderStyle={postStyle.genderBorder}
        selectedButtonStyle={postStyle.genderButton}
      />
      <GradientText style={postStyle.chipText}>{viewText.dob}</GradientText>
      <View>
        <View style={generelPositioning.flexRowSpaceEvenly}>
          <Button buttonStyle={postStyle.dateButton} titleStyle={postStyle.dateTitle} onPress={showMode} title={date.getDate()} />
          <Button buttonStyle={postStyle.dateButton} titleStyle={postStyle.dateTitle} onPress={showMode} title={date.getUTCMonth() + 1} />
          <Button buttonStyle={postStyle.dateButton} titleStyle={postStyle.dateTitle} onPress={showMode} title={date.getFullYear()} />
          {show && (
            <DateTimePicker
              value={date}
              onChange={onChange}
            />
          )}
        </View>
      </View>

      <GradientText style={postStyle.chipText}>{viewText.name}</GradientText>
      <TextInput style={postStyle.input}
        placeholder={'Enter the name of your animal'}
      />
      <GradientText style={postStyle.chipText}>{viewText.breed}</GradientText>
      <View style={generelPositioning.marginBottom}>
        <Breeds />
      </View>
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
        <View style={generelPositioning.flexRowMarginCenterItems}>
          <Text style={postStyle.whl}>Weight</Text>
          <TextInput style={postStyle.input2}
            placeholder={'Enter weight in g'}
            keyboardType={'number-pad'}
            maxLength={4}
            textAlign={'center'}
          />
          <Text style={postStyle.whl}>g</Text>
        </View>
        <View style={generelPositioning.flexRowMarginCenterItems}>
          <Text style={postStyle.whl}>Height</Text>
          <TextInput style={postStyle.input2}
            placeholder={'Enter height in cm'}
            keyboardType={'number-pad'}
            maxLength={4}
            textAlign={'center'}
          />
          <Text style={postStyle.whl}>cm</Text>
        </View>
        <View style={generelPositioning.flexRowMarginCenterItems}>
          <Text style={postStyle.whl}>Length</Text>
          <TextInput style={postStyle.input2}
            placeholder={'Enter length in cm'}
            keyboardType={'number-pad'}
            maxLength={4}
            textAlign={'center'}
          />
          <Text style={postStyle.whl}>cm</Text>
        </View>
      </View>
      <GradientText style={postStyle.chipText}>{viewText.conditions}</GradientText>
      <View style={generelPositioning.marginBottom}>
        <Conditions />
      </View>
      <View style={generelPositioning.flexRowSpaceEvenly}>
        <GradientButton title={'Post animal'} style={postStyle.postButton} />
        <Button title={'Cancel'} containerStyle={postStyle.cancelButton} titleStyle={postStyle.cancelButtonTitle} type={'outline'} />
      </View>
    </ScrollView>
  );
}

export default PostScreen;