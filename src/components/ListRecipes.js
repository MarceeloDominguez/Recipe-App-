import { useNavigation } from "@react-navigation/core";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { Title } from "react-native-paper";

export const ListRecipes = ({ recipes }) => {
  const navigation = useNavigation();
  const recipe = recipes.recipe;
  const { label, image, dietLabels, ingredients, mealType } = recipe;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate("RecipesScreen", recipes.recipe)}
      style={styles.container}
    >
      <View style={{ flexDirection: "row" }}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={{ width: 180, paddingLeft: 6 }}>
          <Title style={styles.title}>{label}</Title>
          <Text style={{ fontWeight: "bold", ...styles.textColor }}>
            Diet type:
            {dietLabels.map((item, index) => (
              <Text style={{ fontWeight: "normal" }} key={index}>
                {" "}
                {item}{" "}
              </Text>
            ))}
          </Text>
          <Text style={{ fontWeight: "bold", ...styles.textColor }}>
            Food type: <Text style={{ fontWeight: "normal" }}>{mealType}</Text>{" "}
          </Text>
        </View>
      </View>
      <Text
        style={{ color: "#229879", fontWeight: "bold", ...styles.positionText }}
      >
        Ingredients ({ingredients.length})
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    paddingVertical: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  title: {
    color: "#229879",
    lineHeight: 22,
    marginBottom: 5,
    opacity: 0.8,
  },
  textColor: {
    color: "#000",
    opacity: 0.7,
  },
  positionText: {
    position: "absolute",
    bottom: 30,
    left: 10,
  },
});
