import React, { useState } from "react";
import { View, Text, ScrollView, Modal, Alert, Pressable } from "react-native";
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
  weight: "",
  height: "",
  length: "",
  conditions: [],
  breeds: [],
};

function PostScreen({ navigation }) {
  const genderButtons = ["Male", "Female"];

  const [animalData, setAnimalData] = useState({ ...data });
  const [gender, setGender] = useState(0);
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);
  const [selectedConditions, setSelectedConditions] = useState([]);
  const [selectedBreeds, setSelectedBreeds] = useState([]);
  const [requiredModal, setRequiredModal] = useState(false);

  const onGenderChange = (index) => {
    setGender(index);
    setAnimalData({ ...animalData, gender: genderButtons[index] });
  };

  const dataCheck = () => {
    for (const [key, value] of Object.entries(animalData)) {
      if (key === "id" || key === "gender") {
        continue;
      }
      if (value === data[key]) {
        return false;
      }
    }
    return true;
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    setAnimalData({
      ...animalData,
      birthDate: {
        day: currentDate.getDate(),
        month: currentDate.getMonth() + 1,
        year: currentDate.getFullYear(),
      },
    });
  };

  const showMode = () => {
    setShow(true);
  };

  const onBreedsChange = (newValue) => {
    setAnimalData({ ...animalData, breeds: newValue.map((item) => item.name) });
  };

  const onConditionsChange = (newValue) => {
    setAnimalData({
      ...animalData,
      conditions: newValue.map((item) => item.name),
    });
  };

  const onConditionSelected = (newValue) => {
    setSelectedConditions(newValue);
  };

  const onBreedSelected = (newValue) => {
    setSelectedBreeds(newValue);
  };

  const onImagesChange = (newValue) => {
    setAnimalData({ ...animalData, images: newValue });
  };

  const postData = () => {
    if (dataCheck()) {
      setSelectedBreeds([]);
      setSelectedConditions([]);
      // get persistence data and set last data
      Database.getItem("data").then((data) =>
        Database.setItem([...data, { ...animalData, id: data.length }], "data")
      );
      // clear data
      setAnimalData({ ...data });
      navigation.navigate("Home");
    } else {
      setRequiredModal(!requiredModal);
    }
  };

  return (
    <View style={generelPositioning.fit100HW}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={requiredModal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setRequiredModal(!requiredModal);
        }}
      >
        <View style={generelPositioning.flexCenter}>
          <View style={postStyle.modal}>
            <Text style={postStyle.modalInfo}>
              Looks like you did not input everything!
            </Text>
            <Pressable
              style={postStyle.modalButton}
              onPress={() => setRequiredModal(!requiredModal)}
            >
              <Text style={postStyle.modalButtonText}>Understood!</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <ScrollView
        style={postStyle.scrollview}
        contentContainerStyle={postStyle.scrollviewContainer}
      >
        <GradientText style={postStyle.chipText}>
          {viewText.images}
        </GradientText>
        <ImageBoxes
          setImages={onImagesChange}
          selectedImages={animalData.images}
        />
        <GradientText style={postStyle.chipText}>
          {viewText.gender}
        </GradientText>
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
              title={animalData.birthDate.day}
            />
            <Button
              buttonStyle={postStyle.dateButton}
              titleStyle={postStyle.dateTitle}
              onPress={showMode}
              title={animalData.birthDate.month}
            />
            <Button
              buttonStyle={postStyle.dateButton}
              titleStyle={postStyle.dateTitle}
              onPress={showMode}
              title={animalData.birthDate.year}
            />
            {show && <DateTimePicker value={date} onChange={onChange} />}
          </View>
        </View>

        <GradientText style={postStyle.chipText}>{viewText.name}</GradientText>
        <TextInput
          style={postStyle.input}
          placeholder={"Enter the name of your animal"}
          onChangeText={(text) => setAnimalData({ ...animalData, name: text })}
          value={animalData.name}
        />
        <GradientText style={postStyle.chipText}>{viewText.breed}</GradientText>
        <View style={generelPositioning.marginBottom}>
          <MultiSelect
            dataName={"breeds"}
            onItemChange={onBreedsChange}
            selectedItems={selectedBreeds}
            onSelectedChange={onBreedSelected}
          />
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
          onChangeText={(text) =>
            setAnimalData({ ...animalData, description: text })
          }
          value={animalData.description}
        />

        <GradientText style={postStyle.chipText}>
          {viewText.location}
        </GradientText>
        <TextInput
          style={postStyle.input}
          placeholder={"Enter the location of your animal"}
          onChangeText={(text) =>
            setAnimalData({ ...animalData, location: text })
          }
          value={animalData.location}
        />
        <GradientText style={postStyle.chipText}>
          {viewText.measurements}
        </GradientText>
        <View>
          <View style={generelPositioning.flexRowMarginCenterItems}>
            <Text style={postStyle.whl}>Weight</Text>
            <TextInput
              style={postStyle.input2}
              placeholder={"Enter weight in kg"}
              keyboardType={"number-pad"}
              maxLength={6}
              textAlign={"center"}
              onChangeText={(text) =>
                setAnimalData({ ...animalData, weight: text })
              }
              value={animalData.weight}
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
              onChangeText={(text) =>
                setAnimalData({ ...animalData, height: text })
              }
              value={animalData.height}
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
              onChangeText={(text) =>
                setAnimalData({ ...animalData, length: text })
              }
              value={animalData.length}
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
            onSelectedChange={onConditionSelected}
            selectedItems={selectedConditions}
          />
        </View>
        <View style={generelPositioning.flexRowSpaceEvenly}>
          <GradientButton
            title={"Post animal"}
            containerStyle={postStyle.postButton}
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
    </View>
  );
}

PostScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default PostScreen;
