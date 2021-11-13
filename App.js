import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "components/views/home";
import SearchScreen from "components/views/search";
import PostScreen from "components/views/post";
import SaveScreen from "components/views/save";
import ProfileScreen from "components/views/profile";
import LoginScreen from "components/views/login";
import RegisterScreen from "components/views/register";
import AnimalScreen from "components/views/animalProfile";
import SettingsScreen from "components/views/settings";

import AppLoading from "expo-app-loading";
import { useFonts, Inter_700Bold } from "@expo-google-fonts/inter";

import Ionicons from "@expo/vector-icons/Ionicons";
import Database from "./components/database";
import { createStackNavigator } from "@react-navigation/stack";
import DebugScreen from "./components/views/debug";
import AppContext from "./components/AppContext";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Tabs() {
  return (
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
            case "Profile":
              iconName = focused ? "person-circle" : "person-circle-outline";
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
        listeners={({ navigation }) => ({
          tabPress: (event) => {
            event.preventDefault();
            global.loggedIn
              ? navigation.navigate("Post")
              : navigation.navigate("Login");
          },
        })}
      />
      <Tab.Screen name="Save" component={SaveScreen} />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        listeners={({ navigation }) => ({
          tabPress: (event) => {
            event.preventDefault();
            global.loggedIn
              ? navigation.navigate("Profile")
              : navigation.navigate("Login");
          },
        })}
      />
      <Tab.Screen name="Debug" component={DebugScreen} />
    </Tab.Navigator>
  );
}

global.loggedIn = false;

export default function App() {
  Database.setup();

  const [userID, setuserID] = React.useState(null);
  const [dataChanged, setDataChanged] = React.useState(false);

  const updateUserID = (id) => {
    setuserID(id);
    if (id == null) {
      global.loggedIn = false;
    } else {
      global.loggedIn = true;
    }
  };

  const updateData = () => {
    setDataChanged(true);
    setDataChanged(false);
  };

  const userSettings = {
    userID: userID,
    updateUserID,
    dataChanged: dataChanged,
    updateData,
  };

  let [fontsLoaded] = useFonts({
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <AppContext.Provider value={userSettings}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Standard"
              component={Tabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="AnimalProfile" component={AnimalScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </AppContext.Provider>
    );
  }
}
