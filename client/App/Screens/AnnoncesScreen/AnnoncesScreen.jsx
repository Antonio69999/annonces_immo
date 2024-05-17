import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { fetchData } from "../../../api.js";
import Header from "../HomeScreen/Header.jsx";
import Heading from "../../Components/Heading.jsx";
import Colors from "../../Utils/Colors.js";

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
    <View>
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
              <Text>{item.localisation.ville}</Text>
              <Text>{item.localisation.codePostal}</Text>
              {item.caractéristiques ? (
                <>
                  <Text>{item.caractéristiques.chambre}</Text>
                  <Text>{item.caractéristiques.salleDeBain}</Text>
                  <Text>{item.caractéristiques.balcon ? "Yes" : "No"}</Text>
                  <Text>{item.caractéristiques.jardin ? "Yes" : "No"}</Text>
                  <Text>{item.caractéristiques.parking ? "Yes" : "No"}</Text>
                </>
              ) : (
                <Text>Caractéristiques not available</Text>
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default AnnoncesScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
