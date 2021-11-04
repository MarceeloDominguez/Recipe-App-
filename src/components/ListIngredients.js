import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Avatar } from "react-native-elements";
import { Title } from "react-native-paper";

export const ListIngredients = ({ item }) => {
  const { food, image, text } = item;
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.containerImage}>
          <Avatar source={{ uri: image }} rounded size={80} />
        </View>
        <View style={styles.containerInfo}>
          <Title style={{ color: "#229879" }}>{food}</Title>
          <Text style={{ opacity: 0.7, color: "#000" }}>{text}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    paddingVertical: 20,
  },
  containerImage: {
    shadowColor: "#000",
    backgroundColor: "#fff",
    borderRadius: 100,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.24,
    shadowRadius: 3.84,

    elevation: 50,
    justifyContent: "center",
    height: 80,
  },
  containerInfo: {
    width: 250,
    paddingLeft: 6,
    justifyContent: "center",
  },
});
