import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { fetchData } from "../../api.js";

interface Localisation {
  ville: string;
  codePostal: string;
}

interface Caracteristiques {
  chambre: number;
  salleDeBain: number;
  balcon: boolean;
  jardin: boolean;
  parking: boolean;
}

interface AnnonceType {
  titre: string;
  prix: number;
  description: string;
  localisation: Localisation;
  caractéristiques: Caracteristiques;
  date: Date;
}

const Annonces: React.FC = () => {
  const [data, setData] = useState<AnnonceType[] | null>(null);

  useEffect(() => {
    const getData = async () => {
      const response = await fetchData("annonces");
      setData(response);
    };

    getData();
  }, []);

  if (!data) {
    return <ActivityIndicator />; // Loading spinner
  }

  return (
    <View>
      {data.map((item, index) => (
        <View key={index}>
          <Text>{item.titre}</Text>
          <Text>{item.prix}</Text>
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
      ))}
    </View>
  );
};

export default Annonces;
