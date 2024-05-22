import React from "react";
import Heading from "../../Components/Heading.jsx";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useRoute } from "@react-navigation/native";
import Colors from "../../Utils/Colors.js";

const AnnoncesDescription = () => {
  const param = useRoute().params;
  const [isReadMore, setIsReadMore] = useState(false);
  const [annonces, setAnnonces] = useState(param?.annonces);

  if (!annonces?.description) {
    return null;
  }

  return (
    <View>
      <Heading text={"Description"} />
      <Text
        style={{
          fontFamily: "NotoSansRegular",
          color: Colors.GRAY,
          fontSize: 16,
          lineHeight: 28,
        }}
        numberOfLines={isReadMore ? 20 : 5}
      >
        {annonces?.description}
      </Text>
      <TouchableOpacity onPress={() => setIsReadMore(true)}>
        <Text
          style={{
            color: Colors.PRIMARY,
            fontSize: 16,
            fontFamily: "NotoSansRegular",
          }}
        >
          {isReadMore ? "Réduire" : "En savoir plus..."}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AnnoncesDescription;

const styles = StyleSheet.create({});
