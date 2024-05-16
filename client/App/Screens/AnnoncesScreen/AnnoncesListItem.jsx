import { StyleSheet, Image, View } from "react-native";

const AnnoncesListItem = ({ annonces }) => {
  const imageUrl = annonces.images && annonces.images[0];

  return (
    <View style={styles.container}>
      {imageUrl && <Image source={{ uri: imageUrl }} style={styles.image} />}
    </View>
  );
};

export default AnnoncesListItem;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
});
