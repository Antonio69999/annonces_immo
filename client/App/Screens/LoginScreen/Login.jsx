import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser";

WebBrowser.maybeCompleteAuthSession();

const Login = () => {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

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
        <TouchableOpacity style={styles.button} onPress={onPress}>
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
    padding: 5,
  },
  slogan: {
    marginTop: 30,
    fontSize: 27,
    color: Colors.WHITE,
    textAlign: "center",
  },
  button: {
    backgroundColor: Colors.WHITE,
    padding: 15,
    borderRadius: 99,
    marginTop: 50,
  },
});
