import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AnnoncesScreen from "../Screens/AnnoncesScreen/AnnoncesScreen";
import FavouriteScreen from "../Screens/FavouriteScreen/FavouriteScreen";
import AgentScreen from "../Screens/AgentScreen/AgentScreen";
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import Colors from "../Utils/Colors";

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
        component={HomeScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>
              Home
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
              Favourite
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <Feather name="bookmark" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Agent"
        component={AgentScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>
              Agents
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
