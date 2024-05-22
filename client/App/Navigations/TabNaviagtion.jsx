import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AnnoncesScreen from "../Screens/AnnoncesScreen/AnnoncesScreen";
import FavouriteScreen from "../Screens/FavouriteScreen/FavouriteScreen";
import ProfilScreen from "../Screens/ProfilScreen/ProfilScreen";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import Colors from "../Utils/Colors";
import HomeNavigation from "./HomeNavigation";

const Tab = createBottomTabNavigator();

const TabNaviagtion = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.PRIMARY,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigation}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>
              Menu
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Annonces"
        component={AnnoncesScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>
              Annonces
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="real-estate-agent" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>
              Favories
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <Feather name="bookmark" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={ProfilScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>
              Profile
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <Foundation name="torso-business" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNaviagtion;

const styles = StyleSheet.create({});
