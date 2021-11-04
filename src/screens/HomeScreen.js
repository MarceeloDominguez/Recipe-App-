import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import categories from "../assets/data/categories";
import { ImageCarousel } from "../components/ImageCarousel";
import { LinearGradient } from "expo-linear-gradient";
import categoriesCuisineType from "../assets/data/categoriesCuisineType";
import { Title } from "react-native-paper";
import { Avatar } from "react-native-elements";
import { useNavigation } from "@react-navigation/core";
import Icon from "@expo/vector-icons/Ionicons";

const { width } = Dimensions.get("window");
const viewWidth = width / 3;

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={{ marginTop: top, flex: 1, backgroundColor: "#F4F6F6" }}>
      <StatusBar barStyle="dark-content" backgroundColor="#F4F6F6" />
      <FlatList
        data={categoriesCuisineType}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={
          <>
            <RenderHeader />
            <ImagesCarousel />
            <Title
              style={{
                ...styles.text,
                fontSize: 20,
                marginHorizontal: 20,
                marginVertical: 10,
              }}
            >
              Cousine type
            </Title>
          </>
        }
        renderItem={({ item }) => (
          <View
            style={{
              alignContent: "center",
              alignItems: "center",
              width: viewWidth,
            }}
          >
            <CousineType cousineCategory={item} />
          </View>
        )}
        numColumns={3}
        ListFooterComponent={<View style={{ marginBottom: 50 }} />}
      />
    </View>
  );
};

function RenderHeader() {
  return (
    <View style={{ marginTop: 20, flex: 1 }}>
      <Text style={{ ...styles.text, fontSize: 25, marginHorizontal: 20 }}>
        Find Best Recipe For Cooking
      </Text>
      <View style={styles.containerInput}>
        <TextInput placeholder="Search Recipes" style={styles.input} />
        <Icon
          name="list-outline"
          color="#229879"
          size={25}
          style={styles.icon}
        />
      </View>
      <Icon name="search" color="#ccc" size={22} style={styles.iconSearch} />
    </View>
  );
}

//carousel de imagenes
function ImagesCarousel() {
  const [itemCategory, setitemCategory] = useState(categories[0]);

  return (
    <View style={{ marginTop: 20, flex: 1 }}>
      <View>
        <FlatList
          data={categories}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          renderItem={({ item }) => (
            <View style={styles.viewCategories}>
              <TouchableOpacity
                onPress={() => setitemCategory(item)}
                activeOpacity={0.8}
              >
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={
                    itemCategory === item
                      ? ["#229879", "#2AD699"]
                      : ["#fff", "#fff"]
                  } //colores de los botones
                  style={styles.button}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: itemCategory === item ? "#fff" : "#000",
                    }}
                  >
                    {item.nameCategory}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      <ImageCarousel itemCategory={itemCategory} />
    </View>
  );
}

//tipo de cocina
function CousineType({ cousineCategory }) {
  const { imageFlag, name } = cousineCategory;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate("CousineTypeScreen", cousineCategory)}
    >
      <View style={styles.containerAvatar}>
        <Avatar source={{ uri: imageFlag }} rounded size={80} />
      </View>
      <Text style={{ textAlign: "center", fontWeight: "bold" }}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: "row",
    marginHorizontal: 16,
    justifyContent: "space-between",
    marginVertical: 20,
  },
  text: {
    fontWeight: "bold",
    color: "#000",
    opacity: 0.7,
    width: "55%",
  },
  viewCategories: {
    marginHorizontal: 20,
    marginVertical: 20,
    width: 80,
  },
  button: {
    paddingVertical: 10,
    borderRadius: 10,
  },
  containerAvatar: {
    marginVertical: 10,
    shadowColor: "#000",
    backgroundColor: "#000",
    borderRadius: 50,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.24,
    shadowRadius: 3.84,

    elevation: 50,
  },
  containerInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  input: {
    height: 50,
    borderRadius: 10,
    marginVertical: 12,
    paddingHorizontal: 35,
    backgroundColor: "#fff",
    flex: 1,
  },
  icon: {
    height: 50,
    marginVertical: 12,
    paddingHorizontal: 10,
    marginLeft: 5,
    justifyContent: "center",
    textAlignVertical: "center",
    backgroundColor: "#DAFADC",
    borderRadius: 10,
  },
  iconSearch: {
    position: "absolute",
    bottom: 25,
    left: 25,
  },
});
