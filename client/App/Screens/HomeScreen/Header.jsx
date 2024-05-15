import { StyleSheet, Image, View, Text, TextInput } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import Colors from "../../Utils/Colors";
import { Feather } from "@expo/vector-icons";

const Header = () => {
  const { user, isLoading } = useUser();

  return (
    <View style={styles.container}>
      {/* Profil Section */}
      <View style={styles.profileMainContainer}>
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: user?.imageUrl }}
            style={styles.userImage}
          ></Image>
          <View>
            <Text style={{ color: Colors.WHITE, fontFamily: "NotoSansMedium" }}>
              Welcome
            </Text>
            <Text
              style={{
                color: Colors.WHITE,
                fontSize: 20,
                fontFamily: "NotoSansRegular",
              }}
            >
              {user?.fullName}
            </Text>
          </View>
        </View>
        <Feather name="bookmark" size={24} color="white" />
      </View>
      {/* Search Bar Section */}
      <View style={styles.searchBarContainer}>
        <TextInput placeholder="Search" style={styles.textInput}></TextInput>
        <Feather
          name="search"
          size={24}
          color={Colors.PRIMARY}
          style={styles.searchBtn}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: Colors.PRIMARY,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  profileMainContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  userImage: {
    width: 45,
    height: 45,
    borderRadius: 99,
  },
  textInput: {
    backgroundColor: Colors.WHITE,
    padding: 7,
    paddingHorizontal: 16,
    borderRadius: 8,
    width: "85%",
    fontSize: 16,
  },
  searchBtn: {
    backgroundColor: Colors.WHITE,
    padding: 10,
    borderRadius: 8,
  },
  searchBarContainer: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
    fontFamily: "NotoSansRegular",
  },
});
