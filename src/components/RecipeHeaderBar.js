import React from "react";
import {
  Animated,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/core";

export const RecipeHeaderBar = ({ recipe, scrollY }) => {
  const { label } = recipe;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="rgba(0,0,0,0)"
        barStyle="light-content"
      />
      {/* para que aparezca el header negro cuando se hace scroll */}
      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#020202",
          opacity: scrollY.interpolate({
            inputRange: [350 - 100, 350 - 70],
            outputRange: [0, 1],
          }),
        }}
      />
      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          alignItems: "center",
          justifyContent: "flex-end",
          paddingBottom: 10,
          //para que aparezca el texto cuando se hace scroll
          opacity: scrollY.interpolate({
            inputRange: [350 - 100, 350 - 50],
            outputRange: [0, 1],
          }),
          //efecto para cuando aparezca el texto
          transform: [
            {
              translateY: scrollY.interpolate({
                inputRange: [350 - 100, 350 - 50],
                outputRange: [50, 0],
                extrapolate: "clamp",
              }),
            },
          ],
        }}
      >
        <Text style={styles.textLabel}>{label}</Text>
      </Animated.View>
      <View style={styles.icons}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-outline" color="#229879" size={25} />
        </TouchableOpacity>
        <Icon name="bookmarks" color="#229879" size={25} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 90,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingBottom: 10,
  },
  textLabel: {
    color: "#229879",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    width: "50%",
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});
