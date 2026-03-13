import { createContext, useState, useEffect } from "react"; // Added useEffect
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

const API_URL = "https://forkify-api.herokuapp.com/api/v2/recipes";

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState(null);
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [favList, setFavList] = useState([]);

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const query = searchParam.trim();
    if (!query) return;

    try {
      setLoading(true);
      const res = await fetch(`${API_URL}?search=${query}`);
      
      if (!res.ok) throw new Error("Failed to fetch"); 

      const data = await res.json();

      if (data?.data?.recipes) {
        setRecipeList(data.data.recipes);
        setSearchParam("");
        navigate("/home");
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setRecipeList([]); 
    } finally {
      setLoading(false);
    }
  }

  function handleFav(recipe) {
    const index = favList.findIndex((item) => item.id === recipe.id);
    const updatedFavs = [...favList];

    if (index === -1) {
      updatedFavs.push(recipe);
    } else {
      updatedFavs.splice(index, 1);
    }
    setFavList(updatedFavs);
  }

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        loading,
        recipeList,
        recipeDetails,
        setRecipeDetails,
        favList,
        handleFav,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
