import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { CategoriesProducts } from "../../data";

const Category = ({ navigation }) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="bg-gray-100  py-5"
    >
      <Text className="font-bold">Catégories</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        className="flex-row gap-5 pt-5"
      >
        {CategoriesProducts.slice(0, 4).map((cat) => (
          <TouchableOpacity
            className=" rounded-xl border-2 border-slate-200 bg-slate-200 flex-row items-center gap-1 p-1"
            key={cat.id}
            onPress={() => navigation.navigate("Produit", { cat })}
          >
            <Image
              source={{
                uri: cat.img,
              }}
              className="w-10 h-10 object-cover rounded-full"
            />
            <Text> {cat.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

export default Category;
