import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import Colors from "../../Utils/Colors.js";
import AnnoncesPhotos from "./AnnoncesPhotos.jsx";
import AnnoncesDescription from "./AnnoncesDescription.jsx";

const AnnoncesDetailScreen = () => {
  const param = useRoute().params;
  const [annonces, setAnnonces] = useState(param?.annonces);
  const navigation = useNavigation();
  const formattedPrice =
    new Intl.NumberFormat("fr-FR").format(annonces.prix) + " €";

  const imageUrl = annonces?.images && annonces.images[0];

  useEffect(() => {
    setAnnonces(param?.annonces);
  }, [param]);

  return (
    annonces && (
      <View>
        <ScrollView style={{ height: "91%" }}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.goBack()}
          >
            <AntDesign name="back" size={30} color="white" />
          </TouchableOpacity>
          {imageUrl && (
            <Image source={{ uri: imageUrl }} style={styles.image} />
          )}
          <View style={styles.annoncesDetail}>
            <Text style={{ fontFamily: "NotoSansBold", fontSize: 25 }}>
              {annonces?.titre}
            </Text>
            <Text
              style={{
                fontFamily: "NotoSansMedium",
                fontSize: 20,
                color: Colors.PRIMARY,
              }}
            >
              {formattedPrice}
            </Text>
            <View style={styles.subContainer}>
              <Text
                style={{
                  padding: 5,
                  borderRadius: 5,
                }}
              >
                <EvilIcons name="location" size={25} color={Colors.PRIMARY} />
                {annonces?.localisation.ville},
                {annonces?.localisation.codePostal}
              </Text>
            </View>
            {/* Horizontal Line */}
            <View
              style={{
                borderWidth: 1,
                borderColor: Colors.GRAY,
                marginTop: 20,
              }}
            ></View>
            {/* Description */}
            <AnnoncesDescription annonces={annonces}></AnnoncesDescription>
            {/* Horizontal Line */}
            <View
              style={{
                borderWidth: 1,
                borderColor: Colors.GRAY,
                marginTop: 20,
              }}
            ></View>
            <AnnoncesPhotos annonces={annonces}></AnnoncesPhotos>
          </View>
        </ScrollView>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.messageBtn}>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "NotoSansMedium",
                color: Colors.PRIMARY,
                fontSize: 18,
              }}
            >
              Message
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.favouriteBtn}>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "NotoSansMedium",
                color: Colors.WHITE,
                fontSize: 18,
              }}
            >
              Favoris
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  );
};

export default AnnoncesDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  backBtn: {
    position: "absolute",
    padding: 20,
    zIndex: 1,
  },
  annoncesDetail: {
    padding: 20,
    display: "flex",
    gap: 7,
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 7,
  },
  messageBtn: {
    padding: 15,
    backgroundColor: Colors.WHITE,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    borderRadius: 99,
    flex: 1,
  },
  favouriteBtn: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderWidth: 1,
    borderColor: Colors.WHITE,
    borderRadius: 99,
    flex: 1,
  },
  btnContainer: {
    display: "flex",
    flexDirection: "row",
    margin: 8,
    gap: 8,
  },
});
