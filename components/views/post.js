import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Button, ButtonGroup } from "react-native-elements";
import GradientText from "../colors/gradient-text";

import { TextInput } from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";

import generelPositioning from "../styles/generel-positioning";
import postStyle from "../styles/post-style";
import standardStyle from "../styles/standard-style";
import GradientButton from "../colors/gradient-button";
import Database from "../database";
import MultiSelect from "../multi-select";
import ImageBoxes from "../image-boxes";
import PropTypes from "prop-types";

const viewText = {
  images: "Images",
  gender: "Gender",
  dob: "Day Of Birth",
  name: "Name",
  breed: "Breed",
  description: "Description",
  location: "Location",
  measurements: "Measurements",
  conditions: "Conditions",
};

const data = {
  id: 0,
  images: [],
  gender: "Male",
  name: "",
  birthDate: {
    day: 3,
    month: 4,
    year: 2005,
  },
  description: "",
  location: "",
  weight: 0,
  height: 0,
  length: 0,
  conditions: [],
  breeds: [],
};

function PostScreen({ navigation }) {
  const genderButtons = ["Male", "Female"];

  const [animalData, setAnimalData] = useState({ ...data });
  const [gender, setGender] = useState(0);
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);
  const [name, setName] = useState(null);
  const [breeds, setBreeds] = useState([]);
  const [description, setDescription] = useState(null);
  const [location, setLocation] = useState(null);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [length, setLength] = useState(0);
  const [conditions, setConditions] = useState([]);
  const [images, setImages] = useState([]);

  const onGenderChange = (index) => {
    setGender(index);
    data.gender = genderButtons[index];
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    data.birthDate.day = currentDate.getDate();
    data.birthDate.month = currentDate.getMonth();
    data.birthDate.year = currentDate.getFullYear();
  };

  const showMode = () => {
    setShow(true);
  };

  const onBreedsChange = (newValue) => {
    setBreeds(newValue);
  };

  const onConditionsChange = (newValue) => {
    setConditions(newValue);
  };

  const onImagesChange = (newValue) => {
    setImages(newValue);
  };

  const postData = async () => {
    data.gender = genderButtons[gender];
    data.name = name;
    data.description = description;
    data.location = location;
    data.weight = weight;
    data.height = height;
    data.length = length;
    data.breeds = breeds.map((item) => item.name);
    data.conditions = conditions.map((item) => item.name);
    data.images = images;

    let dataArray = await Database.getItem("data");
    data.id = dataArray.length;
    dataArray = [...dataArray, data];

    Database.setItem(dataArray, "data");

    Database.getItem("data").then((items) => console.log(items));

    navigation.navigate("Home");
  };

  return (
    <ScrollView
      style={postStyle.scrollview}
      contentContainerStyle={postStyle.scrollviewContainer}
    >
      <GradientText style={postStyle.chipText}>{viewText.images}</GradientText>
      <ImageBoxes setImages={onImagesChange} />
      <GradientText style={postStyle.chipText}>{viewText.gender}</GradientText>
      <ButtonGroup
        selectedIndex={gender}
        onPress={onGenderChange}
        buttons={genderButtons}
        containerStyle={standardStyle.genderContainer}
        buttonStyle={standardStyle.genderButtonDisabled}
        innerBorderStyle={standardStyle.genderBorder}
        selectedButtonStyle={standardStyle.genderButton}
        textStyle={standardStyle.buttonTextBold}
      />
      <GradientText style={postStyle.chipText}>{viewText.dob}</GradientText>
      <View>
        <View style={generelPositioning.flexRowSpaceEvenly}>
          <Button
            buttonStyle={postStyle.dateButton}
            titleStyle={postStyle.dateTitle}
            onPress={showMode}
            title={date.getDate()}
          />
          <Button
            buttonStyle={postStyle.dateButton}
            titleStyle={postStyle.dateTitle}
            onPress={showMode}
            title={date.getMonth() + 1}
          />
          <Button
            buttonStyle={postStyle.dateButton}
            titleStyle={postStyle.dateTitle}
            onPress={showMode}
            title={date.getFullYear()}
          />
          {show && <DateTimePicker value={date} onChange={onChange} />}
        </View>
      </View>

      <GradientText style={postStyle.chipText}>{viewText.name}</GradientText>
      <TextInput
        style={postStyle.input}
        placeholder={"Enter the name of your animal"}
        onChangeText={(text) => setName(text)}
      />
      <GradientText style={postStyle.chipText}>{viewText.breed}</GradientText>
      <View style={generelPositioning.marginBottom}>
        <MultiSelect dataName={"breeds"} onItemChange={onBreedsChange} />
      </View>
      <GradientText style={postStyle.chipText}>
        {viewText.description}
      </GradientText>
      <TextInput
        editable={true}
        maxLength={200}
        multiline={true}
        numberOfLines={4}
        placeholder="Write something nice about the animal..."
        style={postStyle.description}
        onChangeText={(text) => setDescription(text)}
      />

      <GradientText style={postStyle.chipText}>
        {viewText.location}
      </GradientText>
      <TextInput
        style={postStyle.input}
        placeholder={"Enter the location of your animal"}
        onChangeText={(text) => setLocation(text)}
      />
      <GradientText style={postStyle.chipText}>
        {viewText.measurements}
      </GradientText>
      <View>
        <View style={generelPositioning.flexRowMarginCenterItems}>
          <Text style={postStyle.whl}>Weight</Text>
          <TextInput
            style={postStyle.input2}
            placeholder={"Enter weight in g"}
            keyboardType={"number-pad"}
            maxLength={6}
            textAlign={"center"}
            onChangeText={(text) => setWeight(text)}
          />
          <Text style={postStyle.whl}>kg</Text>
        </View>
        <View style={generelPositioning.flexRowMarginCenterItems}>
          <Text style={postStyle.whl}>Height</Text>
          <TextInput
            style={postStyle.input2}
            placeholder={"Enter height in m"}
            keyboardType={"number-pad"}
            maxLength={6}
            textAlign={"center"}
            onChangeText={(text) => setHeight(text)}
          />
          <Text style={postStyle.whl}>m</Text>
        </View>
        <View style={generelPositioning.flexRowMarginCenterItems}>
          <Text style={postStyle.whl}>Length</Text>
          <TextInput
            style={postStyle.input2}
            placeholder={"Enter length in m"}
            keyboardType={"number-pad"}
            maxLength={4}
            textAlign={"center"}
            onChangeText={(text) => setLength(text)}
          />
          <Text style={postStyle.whl}>m</Text>
        </View>
      </View>
      <GradientText style={postStyle.chipText}>
        {viewText.conditions}
      </GradientText>
      <View style={generelPositioning.marginBottom}>
        <MultiSelect
          dataName={"conditions"}
          onItemChange={onConditionsChange}
        />
      </View>
      <View style={generelPositioning.flexRowSpaceEvenly}>
        <GradientButton
          title={"Post animal"}
          style={postStyle.postButton}
          onPress={postData}
        />
        <Button
          title={"Cancel"}
          containerStyle={postStyle.cancelButton}
          titleStyle={postStyle.cancelButtonTitle}
          type={"outline"}
        />
      </View>
    </ScrollView>
  );
}

PostScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default PostScreen;
