import { View } from "react-native";
import React from "react";
import Header from "./Header";
import Slider from "./Slider";
import Categories from "./Categories";
import EstateList from "./EstateList";

const HomeScreen = () => {
  return (
    <View>
      <Header></Header>
      <View style={{ padding: 20 }}>
        <Slider />
        <Categories></Categories>
        <EstateList></EstateList>
      </View>
    </View>
  );
};

export default HomeScreen;
