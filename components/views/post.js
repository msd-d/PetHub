import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, Platform, ScrollView } from 'react-native';
import { Button, ButtonGroup, Input } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import config from '../config';
import * as ImagePicker from 'expo-image-picker';
import GradientText from '../colors/general';

import Ionicons from '@expo/vector-icons/Ionicons';
import { TextInput } from 'react-native';

import SectionedMultiSelect from 'react-native-sectioned-multi-select';

const conditions = [
  // this is the parent or 'item'
  {
    name: 'Conditions',
    id: 0,
    // these are the children or 'sub items'
    children: [
      {
        name: 'Arthritis',
        id: 1,
      },
      {
        name: 'Cancer',
        id: 2,
      },
      {
        name: 'Diabetes Militus',
        id: 3,
      },
      {
        name: 'Epilepsy',
        id: 4,
      },
      {
        name: 'Gastric Dilation Volvulus',
        id: 5,
      },
      {
        name: 'Hypothyroidism',
        id: 6,
      },
    ],
  },
];

  // custom icon renderer passed to iconRenderer prop
  // see the switch for possible icon name
  // values
  const icon = ({ name, size = 18, style }) => {
    // flatten the styles
    const flat = StyleSheet.flatten(style)
    // remove out the keys that aren't accepted on View
    const { color, fontSize, ...styles } = flat

    let iconComponent
    
    switch (name) {
      case 'search':
        iconComponent = <Ionicons name={'search'} size={size} color={color}/>;
        break
      case 'keyboard-arrow-up':
        iconComponent = <Ionicons name={'arrow-up'} size={size} color={color}/>;
        break
      case 'keyboard-arrow-down':
        iconComponent = <Ionicons name={'arrow-down'} size={size} color={color}/>;
        break
      case 'close':
        iconComponent = <Ionicons name={'close'} size={size} color={color}/>;
        break
      case 'check':
        iconComponent = <Ionicons name={'checkmark'} size={size} color={color}/>;
        break
      case 'cancel':
        iconComponent = <Ionicons name={'ban'} size={size} color={color}/>;
        break
      default:
        iconComponent = null
        break
    }
    return <View style={styles}>{iconComponent}</View>
  }


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

  const [selectedItems, setItems] = useState([])

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
      <Input></Input>
      <GradientText style={styles.chipText}>Breed</GradientText>

      <GradientText style={styles.chipText}>Description</GradientText>
      <TextInput
        editable={true}
        maxLength={200}
        multiline={true}
        numberOfLines={4}
        placeholder='Write something nice about the animal...'
        style={{ height: config.deviceWidth * 0.3, marginHorizontal: config.deviceWidth * 0.05, marginTop: 5, backgroundColor: 'rgba(234, 234, 234, 1)', borderRadius: 10, textAlignVertical: 'top', padding: 5 }}
      />

      <GradientText style={styles.chipText}>Location</GradientText>
      <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: config.deviceWidth * 0.05 }}>
        <TextInput style={{ width: config.deviceWidth * 0.725, backgroundColor: 'rgba(234, 234, 234, 1)', borderRadius: 8}}
          placeholder={'Enter the location of your animal'}
        ></TextInput>
        <Button
          buttonStyle={{width: config.deviceWidth *0.1125, height: config.deviceWidth*0.1, marginLeft: config.deviceWidth * 0.05}}
        />
      </View>
      <GradientText style={styles.chipText}>Measurements</GradientText>
      <View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text>Weight</Text>
          <TextInput style={{backgroundColor: 'rgba(234, 234, 234, 1)'}}
          placeholder={'Enter weight in kg'}
          ></TextInput>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text>Height</Text>
          <TextInput style={{backgroundColor: 'rgba(234, 234, 234, 1)'}}
          placeholder={'Enter height in kg'}
          ></TextInput>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text>Length</Text>
          <TextInput style={{backgroundColor: 'rgba(234, 234, 234, 1)'}}
          placeholder={'Enter length in kg'}
          ></TextInput>
        </View>
      </View>
      <GradientText style={styles.chipText}>Conditions</GradientText>
      <SectionedMultiSelect
          items={conditions}
          IconRenderer={icon}
          uniqueKey="id"
          subKey="children"
          selectText="Choose some things..."
          showDropDowns={true}
          readOnlyHeadings={true}
          onSelectedItemsChange={items => setItems(items)}
          selectedItems={selectedItems}
        />
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