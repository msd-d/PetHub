import React, { useState } from 'react';
import { View, StyleSheet, } from 'react-native';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import Ionicons from '@expo/vector-icons/Ionicons';
import tagSelectionStyle from './styles/tag-selection-style';

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

export default class Conditions extends React.Component {
    constructor() {
        super();
        this.state = {
          selectedItems: [],
        };
      }
      onSelectedItemsChange = (selectedItems) => {
        this.setState({ selectedItems });
      };

    render() {
        return (
            <SectionedMultiSelect
            items={conditions}
            IconRenderer={icon}
            uniqueKey="id"
            subKey="children"
            selectText="Choose some things..."
            showDropDowns={true}
            readOnlyHeadings={true}
            onSelectedItemsChange={this.onSelectedItemsChange}
            selectedItems={this.state.selectedItems}
            selectText={'Select animals conditions'}
            styles={tagSelectionStyle}
          />
        );
    }
}

