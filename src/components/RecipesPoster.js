import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/core";

export const RecipesPoster = ({ recipes }) => {
  const { label, image, ingredients, totalTime } = recipes.recipe;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => navigation.navigate("RecipesScreen", recipes.recipe)}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.imageCarousel} />
        <View style={styles.containerLabel}>
          <Text style={styles.titleLabel}>{label}</Text>
          <Text style={{ color: "#fff", opacity: 0.8 }}>
            {ingredients?.length} Ingredients
            {totalTime === 0 ? "" : ` | ${totalTime} Min`}
          </Text>
        </View>
        <Icon name="bookmarks" color="#fff" size={25} style={styles.icon} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    marginVertical: 20,
    shadowColor: "#000",
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.24,
    shadowRadius: 3.84,

    elevation: 10,
  },
  imageCarousel: {
    height: 350,
    borderRadius: 10,
  },
  containerLabel: {
    position: "absolute",
    bottom: 10,
    left: 10,
    width: "60%",
  },
  titleLabel: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  icon: {
    position: "absolute",
    right: 10,
    top: 10,
    padding: 8,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 10,
  },
});
