import React from "react";

export const initialState = {
  resultRecipes: [],
  loading: false,
  error: false
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "getSearchRecipesLoading": {
      return {
        ...state,
        loading: true,
        error: false,
        resultRecipes: [],
      };
    }
    case "getSearchRecipesSuccess": {
      return {
        ...state,
        loading: false,
        error: false,
        resultRecipes: action.payload,
      };
    }
    case "getSearchRecipesFail": {
      return {
        ...state,
        loading: false,
        error: true,
        resultRecipes: [],
      };
    }
    default:
      return state;
  }
};
