import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { fetchData } from "../../../api.js";
import Header from "../HomeScreen/Header.jsx";
import Heading from "../../Components/Heading.jsx";
import Colors from "../../Utils/Colors.js";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const AnnoncesScreen = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await fetchData("annonces");
      setData(response);
    };

    getData();
  }, []);

  if (!data) {
    return <ActivityIndicator />;
  }

  return (
    <ScrollView>
      <View>
        <Header></Header>
      </View>
      <View style={styles.container}>
        <Heading text={"Toutes les annonces"}></Heading>
        {data.map((item, index) => {
          const formattedPrice =
            new Intl.NumberFormat("fr-FR").format(item.prix) + " €";
          return (
            <View key={index}>
              <Text style={{ fontFamily: "NotoSansMedium", fontSize: 18 }}>
                {item.titre}
              </Text>
              <Image
                source={{ uri: item.images[0] }}
                style={styles.sliderImages}
              />

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
              <Text>{item.description}</Text>
              <Text>
                <EvilIcons name="location" size={24} color={Colors.PRIMARY} />
                {item.localisation.ville}, {item.localisation.codePostal}
              </Text>
              <View style={styles.subContainer}>
                {item.caractéristiques ? (
                  <>
                    <Text style={styles.text}>
                      <MaterialIcons
                        name="bedroom-child"
                        size={22}
                        color={Colors.PRIMARY}
                      />
                      {item.caractéristiques.chambre}
                    </Text>
                    <Text style={styles.text}>
                      <MaterialIcons
                        name="bathroom"
                        size={22}
                        color={Colors.PRIMARY}
                      />
                      {item.caractéristiques.salleDeBain}
                    </Text>
                    <Text style={styles.text}>
                      <MaterialIcons
                        name="balcony"
                        size={22}
                        color={Colors.PRIMARY}
                      />
                      {item.caractéristiques.balcon ? "Yes" : "No"}
                    </Text>
                    <Text style={styles.text}>
                      <MaterialIcons
                        name="yard"
                        size={22}
                        color={Colors.PRIMARY}
                      />
                      {item.caractéristiques.jardin ? "Yes" : "No"}
                    </Text>
                    <Text style={styles.text}>
                      <MaterialIcons
                        name="local-parking"
                        size={22}
                        color={Colors.PRIMARY}
                      />
                      {item.caractéristiques.parking ? "Yes" : "No"}
                    </Text>
                  </>
                ) : (
                  <Text style={styles.text}>
                    Caractéristiques not available
                  </Text>
                )}
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default AnnoncesScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
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
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 10,
  },
});
