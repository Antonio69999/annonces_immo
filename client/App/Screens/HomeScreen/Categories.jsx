import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { fetchData } from "../../../api.js";
const Categories = () => {
  const categories = ["appartement", "studio", "maison", "villa"];

  return (
    <View>
      {categories.map((category, index) => (
        <Text key={index}>{category}</Text>
      ))}
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({});
