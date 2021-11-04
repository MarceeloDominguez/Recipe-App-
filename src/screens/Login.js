import React from "react";
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import imageLogin from "../assets/data/Index";
import Icon from "@expo/vector-icons/Ionicons";

export const Login = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        translucent
        backgroundColor="rgba(0,0,0,0)"
        barStyle="light-content"
      />
      <ImageBackground
        source={{ uri: imageLogin }}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <LinearGradient
          start={{ x: 0, y: 0.8 }}
          end={{ x: 0, y: 0 }}
          colors={["#020202", "transparent"]}
          style={styles.linearGradient}
        >
          <View>
            <Text style={styles.title}>Cooking Experience Like a Chef</Text>
            <Text style={styles.description}>
              Let's make a delicious dish with the best recipe for the family
            </Text>
            <TouchableOpacity
              style={{ paddingHorizontal: 60, marginVertical: 30 }}
              activeOpacity={0.8}
              onPress={() => navigation.navigate("Tabs")}
            >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#229879", "#2AD699"]}
                style={styles.button}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Icon
                    name="arrow-forward"
                    color="#229879"
                    size={22}
                    style={styles.icon}
                  />
                  <Text style={styles.buttonTitle}>Get Started</Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  linearGradient: {
    paddingHorizontal: 24,
    position: "absolute",
    bottom: 0,
  },
  title: {
    color: "#fff",
    fontSize: 30,
    lineHeight: 45,
    fontWeight: "bold",
    textAlign: "center",
  },
  description: {
    color: "#fff",
    opacity: 0.5,
    paddingHorizontal: 30,
    marginTop: 20,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    borderRadius: 100,
    padding: 5,
  },
  buttonTitle: {
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
    textAlignVertical: "center",
    marginRight: 18,
    fontWeight: "bold",
  },
  icon: {
    padding: 20,
    borderRadius: 100,
    backgroundColor: "#fff",
  },
});
