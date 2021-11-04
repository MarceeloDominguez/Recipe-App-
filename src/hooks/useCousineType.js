import axios from "axios";
import React, { useEffect, useState } from "react";

const api_key = "95e605469b781de64e7f948ff65a444b";
const id_api = "50cb6f8f";

export const useCousineType = (id) => {
  const [recipesType, setRecipesType] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setError(false);
      try {
        const respAmerican = await axios.get(
          `https://api.edamam.com/search?q=&app_id=${id_api}&app_key=${api_key}&cuisineType=${id}`
        );

        setRecipesType(respAmerican.data.hits);
      } catch {
        setError(true);
      }
      setLoading(false);
    })();
  }, [id]);
  return { recipesType, loading, error };
};
