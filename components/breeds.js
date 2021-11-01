import React from "react";
import { View, StyleSheet } from "react-native";
import SectionedMultiSelect from "react-native-sectioned-multi-select";
import Ionicons from "@expo/vector-icons/Ionicons";
import tagSelectionStyle from "./styles/tag-selection-style";

const breeds = [
  // this is the parent or 'item'
  {
    name: "Dogs",
    id: 0,
    // these are the children or 'sub items'
    children: [
      {
        name: "Golden Retriever",
        id: 1,
      },
      {
        name: "Akita",
        id: 2,
      },
      {
        name: "Chihuahua",
        id: 3,
      },
      {
        name: "Husky",
        id: 4,
      },
      {
        name: "Bulldog",
        id: 5,
      },
      {
        name: "Corgi",
        id: 6,
      },
    ],
  },
];

const styles = StyleSheet.create({});

// custom icon renderer passed to iconRenderer prop
// see the switch for possible icon name
// values
const icon = ({ name, size = 18, style }) => {
  // flatten the styles
  const flat = StyleSheet.flatten(style);
  // remove out the keys that aren't accepted on View
  const { color } = flat;

  let iconComponent;

  switch (name) {
    case "search":
      iconComponent = <Ionicons name={"search"} size={size} color={color} />;
      break;
    case "keyboard-arrow-up":
      iconComponent = <Ionicons name={"arrow-up"} size={size} color={color} />;
      break;
    case "keyboard-arrow-down":
      iconComponent = (
        <Ionicons name={"arrow-down"} size={size} color={color} />
      );
      break;
    case "close":
      iconComponent = <Ionicons name={"close"} size={size} color={color} />;
      break;
    case "check":
      iconComponent = <Ionicons name={"checkmark"} size={size} color={color} />;
      break;
    case "cancel":
      iconComponent = <Ionicons name={"ban"} size={size} color={color} />;
      break;
    default:
      iconComponent = null;
      break;
  }
  return <View style={styles}>{iconComponent}</View>;
};

export default class Breeds extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedItems: [],
    };
  }

  render() {
    return (
      <SectionedMultiSelect
        items={breeds}
        IconRenderer={icon}
        uniqueKey="id"
        subKey="children"
        showDropDowns={true}
        readOnlyHeadings={true}
        onSelectedItemsChange={(selectedItems) =>
          this.setState({ selectedItems })
        }
        selectedItems={this.state.selectedItems}
        searchPlaceholderText={"Search animals"}
        selectText={"Select an animal..."}
        styles={tagSelectionStyle}
      />
    );
  }
}
