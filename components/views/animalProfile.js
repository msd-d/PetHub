import React from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  Linking,
  Alert,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Carousel from "react-native-snap-carousel";
import Database from "../database";
import colors from "../colors";
import generalStyles from "../styles/general-positioning";
import styles from "../styles/animalProfile-style";
import config from "../config";
import PropTypes from "prop-types";
import GradientText from "../colors/gradient-text";
import { getAgeFromTime } from "../util";
import { TouchableOpacity } from "react-native-gesture-handler";

const AnimalScreen = ({ route }) => {
  const item = route.params.item;

  const renderBreeds = () => {
    return item.breeds.map((breed, i) => {
      return (
        <View key={i} style={styles.detailValues}>
          <Text style={styles.detailValue}>{breed}</Text>
        </View>
      );
    });
  };

  const renderConditions = () => {
    if (item.conditions.length === 0)
      return (
        <View style={styles.detailValues}>
          <Text style={styles.detailValue}>None</Text>
        </View>
      );

    return item.conditions.map((condition, i) => {
      return (
        <View key={i} style={styles.detailValues}>
          <Text style={styles.detailValue}>{condition}</Text>
        </View>
      );
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={generalStyles.flexRowMarginTop}>
          <View>
            <Text style={styles.name}>{item.postedBy}</Text>
            <View style={generalStyles.flexRow}>
              <Ionicons name={"location"} size={18} color={colors.gray} />
              <Text style={styles.locationName}>{item.location}</Text>
            </View>
          </View>

          <View style={styles.actions}>
            <TouchableOpacity
              style={styles.takeAction}
              onPress={async () => {
                const user = await Database.getUser(item.postedBy);

                if (user !== undefined || user !== null) {
                  if (user.email.length >= 4) {
                    return Linking.openURL(`mailto:+${user.email}`);
                  }

                  return Alert.alert(
                    "Error",
                    "This user has not added a valid e-mail address."
                  );
                }
              }}
            >
              <Ionicons name="mail" size={36} color={colors.white} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.takeAction}
              onPress={async () => {
                const user = await Database.getUser(item.postedBy);

                if (user !== undefined || user !== null) {
                  if (user.phone.length >= 8 && user.phone.length < 12) {
                    return Linking.openURL(`tel:+45${user.phone}`);
                  }

                  return Alert.alert(
                    "Error",
                    "This user has not added their phone number."
                  );
                }
              }}
            >
              <Ionicons name={"call"} size={36} color={colors.white} />
            </TouchableOpacity>
          </View>
        </View>
        <MyCarousel entries={item.images} />
        <Text style={styles.name}>{item.name}</Text>

        <View style={generalStyles.flexRowMarginTop}>
          <GradientText style={styles.subItem}>
            {item.breeds.length > 1 ? "Mixed" : item.breeds[0]}
          </GradientText>

          <GradientText style={styles.subItem}>{item.gender}</GradientText>

          <GradientText style={styles.subItem}>
            {getAgeFromTime(new Date(item.birthDate))}
            <Text> y/o</Text>
          </GradientText>
        </View>

        <View style={generalStyles.marginBottom}>
          <Text style={styles.description}>{item.description}</Text>
        </View>

        <View style={generalStyles.marginBottom}>
          <View style={generalStyles.flexRow}>
            <View style={styles.details}>
              <Text style={styles.detailName}>Breed</Text>
            </View>
            {renderBreeds()}
          </View>

          <View style={generalStyles.flexRowMarginTop}>
            <View style={styles.details}>
              <Text style={styles.detailName}>Weight</Text>
            </View>
            <View style={styles.detailValues}>
              <Text style={styles.detailValue}>{item.weight} kg</Text>
            </View>
          </View>

          <View style={generalStyles.flexRowMarginTop}>
            <View style={styles.details}>
              <Text style={styles.detailName}>Height</Text>
            </View>
            <View style={styles.detailValues}>
              <Text style={styles.detailValue}>{item.height} cm</Text>
            </View>
          </View>

          <View style={generalStyles.flexRowMarginTop}>
            <View style={styles.conditions}>
              <Text style={styles.conditionName}>Conditions</Text>
            </View>

            {renderConditions()}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

AnimalScreen.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};

export class MyCarousel extends React.Component {
  constructor({ entries }) {
    super();
    this.state = {
      entries: entries,
    };
  }
  render() {
    return (
      <Carousel
        ref={(c) => {
          this._carousel = c;
        }}
        data={this.state.entries}
        renderItem={({ item }) => {
          return (
            <View style={styles.card}>
              <Image source={{ uri: item }} style={styles.image} />
            </View>
          );
        }}
        sliderWidth={config.deviceWidth}
        itemWidth={config.deviceWidth}
      />
    );
  }
}

MyCarousel.propTypes = {
  entries: PropTypes.array,
};

export default AnimalScreen;
