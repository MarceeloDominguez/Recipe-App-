import React, { useContext, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  StyleSheet,
  StatusBar,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import { Searchbar } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ListRecipes } from "../components/ListRecipes";
import { SearchContext } from "../context/searchContext";

export const SearchScreen = () => {
  const { top } = useSafeAreaInsets();
  const [search, setSearch] = useState([]);

  const context = useContext(SearchContext);
  const { searchResults, state } = context;
  const { resultRecipes, loading, error } = state;

  useEffect(() => {
    searchResults(search);
  }, [search]);

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <KeyboardAwareScrollView>
        <View style={{ marginTop: top, marginVertical: 30 }}>
          <Searchbar
            placeholder="Search recipe"
            style={styles.searchBar}
            onChangeText={(e) => setSearch(e)}
          />
        </View>
      </KeyboardAwareScrollView>
      {loading && <ActivityIndicator color="#229879" size={30} />}
      {error && <Text style={styles.error}>Error...</Text>}
      <FlatList
        data={resultRecipes}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <ListRecipes recipes={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    textAlign: "center",
    fontSize: 20,
    color: "red",
  },
  searchBar: {
    elevation: 0,
    marginTop: 30,
    borderRadius: 0,
    backgroundColor: "#F4F6F6",
  },
});
