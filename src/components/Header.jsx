import React from "react";
import { Image, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Header = () => {
  return (
    <View className="flex gap-5 px-5 py-6">
      <View className="flex-row justify-between ">
        <Text className="text-blue-600 text-2xl font-bold">NecStore</Text>
        <Image
          source={require("../../assets/products/vestes/veste-esprit-campus3.webp")}
          className="w-10 h-10 rounded-full"
        />
      </View>
      <TextInput
        placeholder="Rechercher un produit... "
        placeholderTextColor="gray"
        className="text-blue-950 text-lg px-6 py-3 rounded-xl  bg-white"
      />
      <View className="absolute bottom-9 right-8">
        <Icon name="search" size={30} color="gray" />
      </View>
    </View>
  );
};

export default Header;
