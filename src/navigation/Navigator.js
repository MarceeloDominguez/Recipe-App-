import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { CousineTypeScreen } from "../screens/CousineTypeScreen";
import { Login } from "../screens/Login";
import { RecipesScreen } from "../screens/RecipesScreen";
import { Tabs } from "./Tabs";

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{
          title: "",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="RecipesScreen"
        component={RecipesScreen}
        options={{
          title: "",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CousineTypeScreen"
        component={CousineTypeScreen}
        options={{
          headerTintColor: "#229879",
          headerStyle: { elevation: 0, backgroundColor: "#F4F6F6" },
          title: "",
        }}
      />
    </Stack.Navigator>
  );
};
