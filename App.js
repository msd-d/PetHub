import * as React from 'react';
import { Settings, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from 'components/views/home';
import SearchScreen from 'components/views/search';
import PostScreen from 'components/views/post';
import SaveScreen from 'components/views/save';
import ProfileScreen from 'components/views/profile';



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Post" component={PostScreen} />
        <Tab.Screen name="Save" component={SaveScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}