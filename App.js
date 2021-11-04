import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SearchProvider } from "./src/context/searchContext";
import { Navigator } from "./src/navigation/Navigator";

export default function App() {
  return (
    <NavigationContainer>
      <AppState>
        <Navigator />
      </AppState>
    </NavigationContainer>
  );
}

const AppState = ({ children }) => {
  return <SearchProvider>{children}</SearchProvider>;
};
