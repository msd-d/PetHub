import { Image, Platform, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import PropTypes from "prop-types";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as ImagePicker from "expo-image-picker";
import postStyle from "./styles/post-style";
import generelPositioning from "./styles/general-positioning";

function ImageBoxes(props) {
  const [status, setStatus] = useState(null);

  const ImageBox = (props) => {
    const pickImage = async () => {
      if (Platform.OS !== "web" && status == null) {
        const stat = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!stat.granted) {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
        setStatus(stat);
      } else if (status.granted) {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsMultipleSelection: true,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });

        if (!result.cancelled) {
          if (typeof props.images[props.number] === "undefined") {
            props.onImageChange([...props.images, result.uri]);
          } else {
            const updatedImages = [...props.images];
            updatedImages[props.number] = result.uri;
            props.onImageChange(updatedImages);
          }
        }
      }
    };

    const longPress = () => {
      if (typeof props.images[props.number] !== "undefined") {
        props.onImageChange(
          props.images.filter((image, i) => i !== props.number)
        );
      }
    };

    return (
      <TouchableOpacity
        style={postStyle.button}
        onPress={pickImage}
        onLongPress={longPress}
      >
        <View style={postStyle.icon}>
          <Ionicons name="add-circle-outline" size={30} color="white" />
        </View>
        <Image
          source={{ uri: props.images[props.number] }}
          style={postStyle.image}
        />
      </TouchableOpacity>
    );
  };

  ImageBox.propTypes = {
    number: PropTypes.number,
    images: PropTypes.array,
    onImageChange: PropTypes.func,
  };

  return (
    <View style={generelPositioning.flexRowWrap}>
      <ImageBox
        number={0}
        images={props.selectedImages}
        onImageChange={props.setImages}
      />
      <ImageBox
        number={1}
        images={props.selectedImages}
        onImageChange={props.setImages}
      />
      <ImageBox
        number={2}
        images={props.selectedImages}
        onImageChange={props.setImages}
      />
      <ImageBox
        number={3}
        images={props.selectedImages}
        onImageChange={props.setImages}
      />
      <ImageBox
        number={4}
        images={props.selectedImages}
        onImageChange={props.setImages}
      />
      <ImageBox
        number={5}
        images={props.selectedImages}
        onImageChange={props.setImages}
      />
    </View>
  );
}

ImageBoxes.propTypes = {
  setImages: PropTypes.func,
  selectedImages: PropTypes.array,
};

export default ImageBoxes;
