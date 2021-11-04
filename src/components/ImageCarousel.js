import React from "react";
import { ActivityIndicator, Dimensions, Text, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import { useRecipes } from "../hooks/useRecipes";
import { RecipesPoster } from "./RecipesPoster";

const { width } = Dimensions.get("window");

export const ImageCarousel = ({ itemCategory }) => {
  const { id } = itemCategory;
  const { result, loading, error } = useRecipes(id);

  if (loading) {
    return (
      <View style={{ height: 350, flex: 1 }}>
        <ActivityIndicator color="#229879" size={30} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ justifyContent: "center", flex: 1 }}>
        <Text style={{ textAlign: "center", fontSize: 20, color: "red" }}>
          Error...
        </Text>
      </View>
    );
  }

  return (
    <Carousel
      data={result}
      sliderWidth={width}
      itemWidth={300}
      renderItem={({ item }) => <RecipesPoster recipes={item} />}
    />
  );
};
