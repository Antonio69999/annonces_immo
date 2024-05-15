import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import { fetchData } from "../../../api.js";

const Slider = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await fetchData("annonces", {
        limit: 3,
        sort: { date: -1 },
      });
      setData(response);
      //   console.log(response);
    };

    getData();
  }, []);

  if (!data) {
    return <ActivityIndicator />;
  }

  const renderItem = ({ item }) => (
    <View style={{ marginRight: 15 }}>
      <Image source={{ uri: item.images[0] }} style={styles.sliderImages} />
    </View>
  );

  return (
    <View>
      <Text style={styles.heading}>Annonces Pour Vous</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontFamily: "NotoSansMedium",
    marginBottom: 10,
  },
  sliderImages: {
    width: 270,
    height: 155,
    borderRadius: 15,
    objectFit: "cover",
  },
});
