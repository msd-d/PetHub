import React, { useCallback, useContext, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Modal,
  Alert,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { Button, ButtonGroup } from "react-native-elements";
import GradientText from "../colors/gradient-text";
import { TextInput } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import generelPositioning from "../styles/general-positioning";
import postStyle from "../styles/post-style";
import standardStyle from "../styles/standard-style";
import GradientButton from "../colors/gradient-button";
import Database from "../database";
import MultiSelect from "../multi-select";
import ImageBoxes from "../image-boxes";
import PropTypes from "prop-types";
import AppContext from "../AppContext";
import { useFocusEffect } from "@react-navigation/core";
import colors from "../colors";

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
  birthDate: new Date("2005-01-12T13:00:00+00:00"),
  description: "",
  location: "",
  weight: "",
  height: "",
  length: "",
  conditions: [],
  breeds: [],
};

function PostScreen({ navigation, route }) {
  const item = route.params.item;

  useFocusEffect(
    useCallback(() => {
      if (route.params.update) {
        setAnimalData({ ...item, birthDate: new Date(item.birthDate) });
      }
    }, [route])
  );

  const myContext = useContext(AppContext);
  const genderButtons = ["Male", "Female"];

  const [animalData, setAnimalData] = useState({ ...data });
  const [gender, setGender] = useState(0);
  const [show, setShow] = useState(false);
  const [proccessing, setProccessing] = useState(false);
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

  const onChange = (_event, selectedDate) => {
    const currentDate = selectedDate || animalData;
    setShow(false);
    setAnimalData({
      ...animalData,
      birthDate: currentDate,
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
        Database.setItem(
          [
            ...data,
            { ...animalData, id: data.length, postedBy: myContext.userID },
          ],
          "data"
        )
      );
      // clear data
      setAnimalData({ ...data });
      myContext.updateData();
      navigation.navigate("Home");
    } else {
      setRequiredModal(!requiredModal);
    }
  };

  const updateData = async () => {
    if (dataCheck()) {
      setProccessing(true);
      setSelectedBreeds([]);
      setSelectedConditions([]);
      // get persistence data and set last data
      await Database.getItem("data").then((data) => {
        Database.setItem(
          data.map((obj) => (obj.id === item.id ? animalData : obj)),
          "data"
        );
      });
      // clear data
      setAnimalData({ ...data });
      myContext.updateData();
      setProccessing(false);
      navigation.navigate("Home");
    } else {
      setRequiredModal(!requiredModal);
    }
  };

  const clearData = () => {
    setSelectedBreeds([]);
    setSelectedConditions([]);
    setAnimalData({ ...data });
  };

  return (
    <View style={generelPositioning.fit100HW}>
      {proccessing && (
        <View style={generelPositioning.activityIndicator}>
          <ActivityIndicator size="large" color={colors.pethubPink} />
        </View>
      )}
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
              title={animalData.birthDate.getDate()}
            />
            <Button
              buttonStyle={postStyle.dateButton}
              titleStyle={postStyle.dateTitle}
              onPress={showMode}
              title={animalData.birthDate.getMonth() + 1}
            />
            <Button
              buttonStyle={postStyle.dateButton}
              titleStyle={postStyle.dateTitle}
              onPress={showMode}
              title={animalData.birthDate.getFullYear()}
            />
            {show && (
              <DateTimePicker
                value={animalData.birthDate}
                onChange={onChange}
              />
            )}
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
            selectText={"Select animal breed"}
            single={true}
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
            selectText={"Select animal conditions"}
            single={false}
          />
        </View>
        <View style={generelPositioning.flexRowSpaceEvenly}>
          <GradientButton
            title={"Post animal"}
            buttonStyle={postStyle.postButton}
            containerStyle={postStyle.postButtonContainer}
            onPress={async () => {
              route.params.update ? updateData() : postData();
            }}
          />
          <Button
            title={"Cancel"}
            containerStyle={postStyle.cancelButtonContainer}
            buttonStyle={postStyle.cancelButton}
            titleStyle={postStyle.cancelButtonTitle}
            type={"outline"}
            onPress={() => {
              clearData();
              navigation.navigate("Home");
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

PostScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
};

export default PostScreen;
