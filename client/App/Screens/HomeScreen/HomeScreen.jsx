import { View } from "react-native";
import React from "react";
import Header from "./Header";
import Slider from "./Slider";

const HomeScreen = () => {
  return (
    <View>
      <Header></Header>
      <View style={{ padding: 20 }}>
        <Slider />
      </View>
    </View>
  );
};

export default HomeScreen;
