import React from "react";
import { View, StyleSheet } from "react-native";
import SectionedMultiSelect from "react-native-sectioned-multi-select";
import Ionicons from "@expo/vector-icons/Ionicons";
import tagSelectionStyle from "./styles/tag-selection-style";
import Database from "./database";

// custom icon renderer passed to iconRenderer prop
// see the switch for possible icon name
// values
const icon = ({ name, size = 18, style }) => {
  // flatten the styles
  const flat = StyleSheet.flatten(style);
  // remove out the keys that aren't accepted on View
  const { color, ...styles } = flat;

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

export default class Conditions extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedItems: [],
      conditions: [],
    };
  }

  componentDidMount() {
    Database.getItem("conditions").then((data) =>
      this.setState({ conditions: data })
    );
  }

  render() {
    return (
      <SectionedMultiSelect
        items={this.state.conditions}
        IconRenderer={icon}
        uniqueKey="id"
        subKey="children"
        showDropDowns={true}
        readOnlyHeadings={true}
        onSelectedItemsChange={(selectedItems) =>
          this.setState({ selectedItems })
        }
        selectedItems={this.state.selectedItems}
        selectText={"Select animals conditions"}
        styles={tagSelectionStyle}
      />
    );
  }
}
