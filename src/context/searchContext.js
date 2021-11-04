import React, { createContext, useReducer } from "react";
import { initialState, searchReducer } from "./searchReducer";

const api_key = "95e605469b781de64e7f948ff65a444b";
const id_api = "50cb6f8f";

export const SearchContext = createContext({});

export const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(searchReducer, initialState);

  const searchResults = async (search) => {
    dispatch({
      type: "getSearchRecipesLoading",
    });

    try {
      const respFetch = await fetch(
        `https://api.edamam.com/search?q=${search}&app_id=${id_api}&app_key=${api_key}`
      );
      const resp = await respFetch.json();
      dispatch({
        type: "getSearchRecipesSuccess",
        payload: resp.hits,
      });
    } catch {
      dispatch({
        type: "getSearchRecipesFail",
      });
    }
  };

  return (
    <SearchContext.Provider
      value={{
        state,
        searchResults,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
