import React, { useState, useEffect } from "react";
import {
  View,
  ActivityIndicator,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import { fetchData } from "../../../api.js";
import Heading from "../../Components/Heading.jsx";

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
      <Heading text={"Annonces Pour Vous"} />
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
  sliderImages: {
    width: 270,
    height: 155,
    borderRadius: 15,
    objectFit: "cover",
  },
});
