import { StyleSheet, FlatList, View, Image } from "react-native";
import React from "react";

const AnnoncesPhotos = ({ annonces }) => {
  return (
    <View>
      <FlatList
        data={annonces.images}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.image} />
        )}
      />
    </View>
  );
};

export default AnnoncesPhotos;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 120,
    flex: 1,
    borderRadius: 5,
    margin: 5,
  },
});
