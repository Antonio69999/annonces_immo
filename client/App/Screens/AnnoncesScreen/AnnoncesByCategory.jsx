import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { fetchData } from "../../../api.js";
import AnnoncesListItem from "./AnnoncesListItem.jsx";

const AnnoncesByCategory = () => {
  const [data, setData] = useState(null);
  const param = useRoute().params;

  const navigation = useNavigation();

  const getData = async (categoryId) => {
    const response = await fetchData(`annonces/category/${categoryId}`);
    setData(response);
  };

  useEffect(() => {
    getData(param.category._id);
  }, []);

  return (
    <View style={{ padding: 20, paddingTop: 30 }}>
      <TouchableOpacity
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
        }}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <AntDesign name="back" size={30} color="black" />
        <Text
          style={{
            fontSize: 25,
            fontFamily: "NotoSansMedium",
            textTransform: "capitalize",
          }}
        >
          {param.category.name}
        </Text>
      </TouchableOpacity>
      <FlatList
        data={data}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <AnnoncesListItem annonces={item} />}
      />
    </View>
  );
};

export default AnnoncesByCategory;

const styles = StyleSheet.create({});
