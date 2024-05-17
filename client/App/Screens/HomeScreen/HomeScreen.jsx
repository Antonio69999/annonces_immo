import { View, ScrollView } from "react-native";
import React from "react";
import Header from "./Header";
import Slider from "./Slider";
import Categories from "./Categories";
import EstateList from "./EstateList";

const HomeScreen = () => {
  return (
    <ScrollView style={{ height: "95%" }}>
      <Header></Header>
      <View style={{ padding: 20 }}>
        <Slider />
        <Categories></Categories>
        <EstateList></EstateList>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
