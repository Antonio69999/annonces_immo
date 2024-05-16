import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen/HomeScreen.jsx";
import AnnoncesByCategory from "../Screens/AnnoncesScreen/AnnoncesByCategory";

const Stack = createStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="home" component={HomeScreen}></Stack.Screen>
      <Stack.Screen
        name="annoncesList"
        component={AnnoncesByCategory}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default HomeNavigation;

const styles = StyleSheet.create({});
