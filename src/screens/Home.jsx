import React, { useCallback, useState } from "react";
import {
  SafeAreaView,
  RefreshControl,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Badge } from "react-native-paper";
import BottomTabs from "../components/BootomTabs";
import Category from "../components/home/Category";
import FeaturedProducts from "../components/home/FeaturedProducts";

const Home = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-gray-900 ">
      <StatusBar barStyle="light-content" backgroundColor="#1F2937" />
      <View className="flex gap-5 px-5 py-6">
        <View className="flex-row justify-between ">
          <Text className="text-blue-600 text-2xl font-bold">NecStore</Text>
          <View className="px-3">
            <Icon name="shopping-cart" size={30} color="white" />
          </View>
          <View className="absolute bottom-5 right-0">
            <Badge>3</Badge>
          </View>
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="bg-gray-100 px-5 py-5 "
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Category navigation={navigation}/>
        <View className="flex-row justify-between items-center mt-3">
          <Text className="font-bold">Produits en vedette</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Boutique")}>
            <Text className="text-blue-700 font-semibold">
              Tout voir {">"}
            </Text>
          </TouchableOpacity>
        </View>
        <FeaturedProducts navigation={navigation}/>
      </ScrollView>
      <BottomTabs navigation={navigation} />
    </SafeAreaView>
  );
};

export default Home;
