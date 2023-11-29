import React, { useCallback, useState } from "react";
import {
  SafeAreaView,
  RefreshControl,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import BottomTabs from "../components/BootomTabs";
import Category from "../components/home/Category";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Header from "../components/Header";
import FeaturedPosts from "../components/home/FeaturedPosts";

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
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="bg-gray-100 px-5 py-5 "
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Category navigation={navigation} />
        <View className="flex-row justify-between items-center py-3">
          <Text className="font-bold">Produits en vedette</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Boutique")}>
            <Text className="text-blue-700 font-semibold">Tout voir {">"}</Text>
          </TouchableOpacity>
        </View>
        <FeaturedProducts navigation={navigation} />
        <View className="flex-row justify-between items-center pt-6 pb-3">
          <Text className="font-bold">Produits en vedette</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Boutique")}>
            <Text className="text-blue-700 font-semibold">Tout voir {">"}</Text>
          </TouchableOpacity>
        </View>
        <FeaturedPosts navigation={navigation} />
      </ScrollView>
      <BottomTabs navigation={navigation} />
    </SafeAreaView>
  );
};

export default Home;
