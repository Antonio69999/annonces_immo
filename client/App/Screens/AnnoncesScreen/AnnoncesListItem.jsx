import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
import Colors from "../../Utils/Colors.js";
import { EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const AnnoncesListItem = ({ annonces }) => {
  const imageUrl = annonces.images && annonces.images[0];
  const navigation = useNavigation();
  const formattedPrice =
    new Intl.NumberFormat("fr-FR").format(annonces.prix) + " €";

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.push("annoncesDetail", { annonces: annonces })}
    >
      {imageUrl && <Image source={{ uri: imageUrl }} style={styles.image} />}
      <View style={styles.subContainer}>
        <Text style={{ fontFamily: "NotoSansMedium", fontSize: 18 }}>
          {annonces.titre}
        </Text>
        <Text
          style={{
            fontFamily: "NotoSansBold",
            fontSize: 14,
            padding: 3,
            color: Colors.PRIMARY,
            backgroundColor: Colors.PRIMARY_LIGHT,
            borderRadius: 5,
            alignSelf: "flex-start",
          }}
        >
          {formattedPrice}
        </Text>
        <Text
          style={{
            fontFamily: "NotoSansRegular",
            fontSize: 15,
            color: Colors.GRAY,
          }}
        >
          <EvilIcons name="location" size={24} color={Colors.PRIMARY} />

          {annonces.localisation.ville}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default AnnoncesListItem;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 15,
    marginBottom: 15,
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  subContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 7,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
});
