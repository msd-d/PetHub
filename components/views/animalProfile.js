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
import { LinearGradient } from "expo-linear-gradient";
import Carousel from "react-native-snap-carousel";
import { Button } from "react-native-elements/dist/buttons/Button";
import Database from "../database";
import colors from "../colors";
import generalStyles from "../styles/general-positioning";
import styles from "../styles/animalProfile-style";
import config from "../config";
import PropTypes from "prop-types";
import GradientText from "../colors/gradient-text";

const AnimalScreen = ({ route }) => {
  const item = route.params.item;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={generalStyles.flexRowMarginTop}>
          <View>
            <Text style={styles.name}>{item.postedBy}</Text>
            <View style={generalStyles.flexRow}>
              <Ionicons name={"location"} size={18} color={colors.gray} />
              <Text style={styles.locationName}>{item.location}</Text>
            </View>
          </View>

          <View style={styles.actions}>
            <Button
              buttonStyle={styles.takeAction}
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
              ViewComponent={LinearGradient}
              linearGradientProps={{
                colors: ["rgba(223, 122, 153, 1)", "rgba(232, 193, 171, 1)"],
                start: { x: -1, y: -1 },
                end: { x: 1, y: 3 },
              }}
              icon={
                <Ionicons name={"at-circle"} size={36} color={colors.white} />
              }
            ></Button>

            <Button
              buttonStyle={styles.takeAction}
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
              ViewComponent={LinearGradient}
              linearGradientProps={{
                colors: ["rgba(223, 122, 153, 1)", "rgba(232, 193, 171, 1)"],
                start: { x: -1, y: -1 },
                end: { x: 1, y: 3 },
              }}
              icon={<Ionicons name={"call"} size={36} color={colors.white} />}
            ></Button>
          </View>
        </View>
        <MyCarousel entries={item.images} />
        <Text style={styles.name}>{item.name}</Text>

        <View style={generalStyles.flexRow}>
          <GradientText style={styles.subItem}>{item.gender}</GradientText>

          <GradientText style={styles.subItem}>
            {Math.round(
              Math.abs(new Date(item.birthDate) - Date.now()) /
                (1000 * 60 * 60 * 24) /
                365
            )}
            <Text> years old</Text>
          </GradientText>
        </View>

        <Text style={styles.description}>{item.description}</Text>

        <View></View>
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
