import React, { useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { Title } from "react-native-paper";
import { ListIngredients } from "../components/ListIngredients";
import { RecipeCardHeader } from "../components/RecipeCardHeader";
import { RecipeHeaderBar } from "../components/RecipeHeaderBar";

export const RecipesScreen = ({ route }) => {
  const recipe = route.params;
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <View style={{ flex: 1 }}>
      <Animated.FlatList
        data={recipe.ingredients}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        ListHeaderComponent={
          <>
            <RecipeCardHeader recipe={recipe} scrollY={scrollY} />
            <Title style={styles.title}>
              Ingredients ({recipe.ingredients.length})
            </Title>
          </>
        }
        renderItem={({ item }) => <ListIngredients item={item} />}
      />

      <RecipeHeaderBar recipe={recipe} scrollY={scrollY} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 22,
    color: "#000",
    opacity: 0.7,
    fontWeight: "bold",
  },
});
