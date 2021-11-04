import { BlurView } from "expo-blur";
import React from "react";
import { Animated, StyleSheet, Text, View } from "react-native";

export const RecipeCardHeader = ({ recipe, scrollY }) => {
  const { image, label } = recipe;

  return (
    <View style={{ overflow: "hidden", alignItems: "center" }}>
      <Animated.Image
        source={{ uri: image }}
        style={{
          ...styles.image,
          transform: [
            {
              translateY: scrollY.interpolate({
                inputRange: [-350, 0, 350],
                outputRange: [-350 / 2, 0, 350 * 0.75],
              }),
            },
            //agrandar y achicar image
            {
              scale: scrollY.interpolate({
                inputRange: [-350, 0, 350],
                outputRange: [2, 1, 2],
              }),
            },
          ],
        }}
      />
      <Animated.View
        style={{
          position: "absolute",
          bottom: 10,
          transform: [
            {
              translateY: scrollY.interpolate({
                inputRange: [0, 170, 250],
                outputRange: [0, 0, 100],
                extrapolate: "clamp",
              }),
            },
          ],
        }}
      >
        <BlurView tint="dark" style={styles.blurView}>
          <View style={{ marginVertical: 10 }}>
            <Text style={styles.textLabel}>{label}</Text>
          </View>
        </BlurView>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  blurView: {
    flex: 1,
    width: 300,
    height: 50,
    borderRadius: 5,
  },
  textLabel: {
    color: "#229879",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    height: "100%",
    textAlignVertical: "center",
  },
});
