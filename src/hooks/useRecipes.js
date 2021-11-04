import React, { useEffect, useState } from "react";
import axios from "axios";

const api_key = "95e605469b781de64e7f948ff65a444b";
const id_api = "50cb6f8f";

export const useRecipes = (id) => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setError(false);
      try {
        const json = await axios.get(
          `https://api.edamam.com/search?q=${id}&app_id=${id_api}&app_key=${api_key}`
        );
        setResult(json.data.hits);
      } catch {
        setError(true);
      }
      setLoading(false);
    })();
  }, [id]);

  return { result, loading, error };
};
