import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { fetchData } from "../../../api.js";
import Heading from "../../Components/Heading.jsx";
import { useNavigation } from "@react-navigation/native";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await fetchData("categories"); // replace 'categories' with your actual endpoint
      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <View style={{ marginTop: 10 }}>
      <Heading text={"Categories"} isViewAll={true}></Heading>
      <FlatList
        data={categories}
        keyExtractor={(item, index) => index.toString()}
        numColumns={4}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) =>
          index <= 3 && (
            <TouchableOpacity
              style={styles.container}
              onPress={() =>
                navigation.push("annoncesList", { category: item })
              }
            >
              <View style={styles.logoContainer}>
                <Image source={{ uri: item.logo }} style={styles.logo} />
              </View>
              <Text
                style={{
                  fontFamily: "NotoSansMedium",
                  marginTop: 5,
                  fontSize: 13,
                  textTransform: "capitalize",
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          )
        }
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  logoContainer: {
    padding: 10,
  },
  logo: {
    width: 50,
    height: 50,
    gap: 10,
  },
});
