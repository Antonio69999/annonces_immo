import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Heading = ({ text, isViewAll = false }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{text}</Text>
      {isViewAll && <Text>ViewAll</Text>}
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  heading: {
    fontSize: 20,
    fontFamily: "NotoSansMedium",
    marginBottom: 10,
  },
});
