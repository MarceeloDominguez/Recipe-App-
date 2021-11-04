import React, { useEffect } from "react";
import {
  FlatList,
  StatusBar,
  StyleSheet,
  ActivityIndicator,
  View,
  Text,
} from "react-native";
import { Title } from "react-native-paper";
import { ListRecipes } from "../components/ListRecipes";
import { useCousineType } from "../hooks/useCousineType";

export const CousineTypeScreen = ({ route, navigation }) => {
  const cousineCategory = route.params;
  const { id } = cousineCategory;
  const { recipesType, loading, error } = useCousineType(id);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Title style={{ color: "#229879" }}>{id}</Title>,
      headerTitleAlign: "center",
    });
  }, [navigation]);

  if (loading) {
    return (
      <View style={styles.viewIndicator}>
        <ActivityIndicator color="#229879" size={35} />
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
    <View style={{ flex: 1, backgroundColor: "##F4F6F6" }}>
      <StatusBar barStyle="dark-content" backgroundColor="#F4F6F6" />
      <FlatList
        data={recipesType}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <ListRecipes recipes={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4F6F6",
  },
});
