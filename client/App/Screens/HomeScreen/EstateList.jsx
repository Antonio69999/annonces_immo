import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ActivityIndicator,
} from "react-native";
import React from "react";
import Heading from "../../Components/Heading.jsx";
import { fetchData } from "../../../api.js";
import { useState, useEffect } from "react";
import Colors from "../../Utils/Colors.js";

const EstateList = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await fetchData("annonces");
      if (response && response.length) {
        const randomData = [];
        for (let i = 0; i < 3; i++) {
          const randomIndex = Math.floor(Math.random() * response.length);
          randomData.push(response[randomIndex]);
          response.splice(randomIndex, 1);
        }
        setData(randomData);
      }
    };

    getData();
  }, []);

  if (!data) {
    return <ActivityIndicator />;
  }

  const renderItem = ({ item }) => {
    const formattedPrice =
      new Intl.NumberFormat("fr-FR").format(item.prix) + " €";

    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={{ fontFamily: "NotoSansMedium", fontSize: 18 }}>
            {item.titre}
          </Text>
          <Text
            style={{
              fontFamily: "NotoSansRegular",
              fontSize: 13,
              padding: 3,
              color: Colors.PRIMARY,
              backgroundColor: Colors.PRIMARY_LIGHT,
              borderRadius: 5,
              alignSelf: "flex-start",
            }}
          >
            {formattedPrice}
          </Text>
          <Text>{item.ville}</Text>
        </View>
        <Image source={{ uri: item.images[0] }} style={styles.sliderImages} />
      </View>
    );
  };

  return (
    <View style={{  }}>
      <Heading text={"Biens immobiliés"} isViewAll={true}></Heading>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.titre}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      ></FlatList>
    </View>
  );
};

export default EstateList;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 10,
  },

  sliderImages: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
    borderRadius: 10,
  },
});
