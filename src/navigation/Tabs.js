import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import Icon from "@expo/vector-icons/Ionicons";
import { HomeScreen } from "../screens/HomeScreen";
import { SearchScreen } from "../screens/SearchScreen";

const Tab = createMaterialBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      barStyle={{ backgroundColor: "#F4F6F6", elevation: 0 }}
      activeColor="#000"
      inactiveColor="#ccc"
      screenOptions={({ route }) => ({
        title: "",
        tabBarColor: "red",
        tabBarIcon: ({ color }) => {
          let iconName = "";
          switch (route.name) {
            case "HomeScreen":
              iconName = "home";
              break;
            case "SearchScreen":
              iconName = "search";
              break;
          }
          return (
            <Icon
              name={iconName}
              size={20}
              color={color}
              style={{ paddingTop: 5 }}
            />
          );
        },
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
    </Tab.Navigator>
  );
};
