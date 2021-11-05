import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "components/views/home";
import SearchScreen from "components/views/search";
import PostScreen from "components/views/post";
import SaveScreen from "components/views/save";
import ProfileScreen from "components/views/profile";
import LoginScreen from "components/views/login";

import AppLoading from "expo-app-loading";
import { useFonts, Inter_700Bold } from "@expo-google-fonts/inter";

import Ionicons from "@expo/vector-icons/Ionicons";
import Database from "./components/database";

const Tab = createBottomTabNavigator();

global.loggedIn = true;

export default function App() {
  Database.setup();
  let [fontsLoaded] = useFonts({
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerStatusBarHeight: 0,
            headerTitle: "",
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              // TODO: Handle sessions for navigation
              // Show profile or login view based on session state

              switch (route.name) {
                case "Home":
                  iconName = focused ? "home" : "home-outline";
                  break;
                case "Search":
                  iconName = focused ? "search" : "search-outline";
                  break;
                case "Post":
                  iconName = focused ? "add-circle" : "add-circle-outline";
                  break;
                case "Save":
                  iconName = focused ? "bookmark" : "bookmark-outline";
                  break;
                case "Login":
                  iconName = focused ? "log-in" : "log-in-outline";
                  break;
                case "Profile":
                  iconName = focused
                    ? "person-circle"
                    : "person-circle-outline";
                  break;
                default:
                  iconName = "alert";
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#DF7A99",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Search" component={SearchScreen} />
          <Tab.Screen
            name="Post"
            component={PostScreen}
            listeners={({ navigation, route }) => ({
              tabPress: (event) => {
                event.preventDefault();
                global.loggedIn
                  ? navigation.navigate("Post")
                  : navigation.navigate("Login");
              },
            })}
          />
          <Tab.Screen name="Save" component={SaveScreen} />
          <Tab.Screen name="Login" component={LoginScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
