import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Badge } from "react-native-paper";

const BootomTabs = ({ navigation }) => {
  return (
    <View className="flex-row justify-between items-center px-10 py-10 bg-gray-900 absolute bottom-0 left-0 right-0">
      <TouchableOpacity onPress={() => navigation.navigate("Home")} className="flex items-center">
        <Icon name="home" size={30} color="white" />
        <Text className="text-white">
          Accueil
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Boutique")} className="flex items-center">
        <Image
          source={require("../../assets/store.png")}
          style={{ width: 30, height: 30, tintColor: "white" }}
        />
        <Text className="text-white">
          Boutique
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Boutique")} className="flex items-center">
        <Icon name="shopping-cart" size={30} color="white" />
        <View className="absolute bottom-5 left-5">
          <Badge>3</Badge>
        </View>
        <Text className="text-white">
          Panier
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BootomTabs;
