import { Image, Platform, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as ImagePicker from "expo-image-picker";
import postStyle from "./styles/post-style";
import generelPositioning from "./styles/generel-positioning";

function ImageBoxes(props) {
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    props.setImages(images);
  }, [images]);

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
          if (typeof images[props.number] === "undefined") {
            setImages((images) => [...images, result.uri]);
          } else {
            const updatedImages = [...images];
            updatedImages[props.number] = result.uri;
            setImages(updatedImages);
          }
        }
      }
    };

    const longPress = () => {
      if (typeof images[props.number] !== "undefined") {
        setImages((images) => images.filter((image, i) => i !== props.number));
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
        <Image source={{ uri: images[props.number] }} style={postStyle.image} />
      </TouchableOpacity>
    );
  };

  ImageBox.propTypes = {
    number: PropTypes.number,
  };

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

ImageBoxes.propTypes = {
  setImages: PropTypes.func,
};

export default ImageBoxes;
