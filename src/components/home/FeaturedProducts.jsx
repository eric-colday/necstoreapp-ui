import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Products } from "../../data";

const FeaturedProducts = ({navigation}) => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      className="flex-row gap-5 pt-2"
    >
      {Products.slice(0, 4).map((product) => (
        <TouchableOpacity
          className="bg-white rounded-xl  w-72 h-72"
          key={product.id}
          onPress={() => navigation.navigate("Produit", { product })}
        >
          <Image
            source={
              product.image[0] && {
                uri: product.image[0],
              }
            }
            className="w-full h-56 object-cover rounded-t-lg"
          />
          <View className="flex-row justify-between items-center px-5 pt-4">
            <Text>
              {" "}
              {product.title.length > 25
                ? product.title.substring(0, 25 - 3) + "..."
                : product.title}{" "}
            </Text>
            <Text className="font-bold text-lg">{product.price} €</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default FeaturedProducts;
