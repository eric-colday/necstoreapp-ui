import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const BootomTabs = ({ navigation }) => {
  return (
    <View className="flex-row justify-between items-center px-5 py-6 bg-gray-900 absolute bottom-0 left-0 right-0">
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Icon name="home" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Boutique")}>
        {/* trouve icon store */}
        <Image
          source={require("../../assets/store.png")}
          style={{ width: 30, height: 30, tintColor: "white" }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Boutique")}>
        <Icon name="shopping-cart" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default BootomTabs;
