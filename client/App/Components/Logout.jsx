import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { useAuth } from "@clerk/clerk-expo";
import { AntDesign } from "@expo/vector-icons";

const Logout = () => {
  const { signOut } = useAuth();

  return (
    <TouchableOpacity
      onPress={() => {
        signOut();
      }}
    >
      <AntDesign name="logout" size={20} color="white" />
      {/* <Text>Logout</Text> */}
    </TouchableOpacity>
  );
};

export default Logout;
