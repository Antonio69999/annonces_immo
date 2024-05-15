import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";

const Login = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={require("../../../assets/images/login.png")}
        style={styles.loginImage}
      ></Image>
      <View style={styles.subContainer}>
        <Text style={styles.slogan}>
          Harder - Making{" "}
          <Text style={{ fontWeight: "bold" }}>Real Estate</Text> Easier
        </Text>
        <Text
          style={{
            fontSize: 17,
            color: Colors.WHITE,
            textAlign: "center",
            marginTop: 20,
          }}
        >
          The Best App for Smart Real Estate Decisions
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("Pressed")}
        >
          <Text
            style={{ textAlign: "center", fontSize: 17, color: Colors.PRIMARY }}
          >
            Let's Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginImage: {
    width: 390,
    height: 450,
    marginTop: 70,
    resizeMode: "contain",
  },
  subContainer: {
    width: "100%",
    backgroundColor: Colors.PRIMARY,
    height: "70%",
    marginTop: -15,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 35,
  },
  slogan: {
    fontSize: 27,
    color: Colors.WHITE,
    textAlign: "center",
  },
  button: {
    backgroundColor: Colors.WHITE,
    padding: 15,
    borderRadius: 99,
    marginTop: 40,
  },
});
