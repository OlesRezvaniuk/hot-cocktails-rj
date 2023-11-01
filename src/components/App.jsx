import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { Layout } from "./Layout/Layout";
import { useState } from "react";
import { FavoriteCocktailsPage } from "../pages/FavoriteCocktailsPage";

function App() {
  const [changeContent, setChangeContent] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const [cocktailDetails, setCocktailDetails] = useState({
    cocktail: null,
    empty: true,
    visible: false,
    ingredients: { data: null, visible: false },
  });

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout
            changeContent={changeContent}
            setChangeContent={setChangeContent}
            setSelectedButton={setSelectedButton}
          />
        }
      >
        <Route
          index
          element={
            <HomePage
              changeContent={changeContent}
              setChangeContent={setChangeContent}
              selectedButton={selectedButton}
              setSelectedButton={setSelectedButton}
              cocktailDetails={cocktailDetails}
              setCocktailDetails={setCocktailDetails}
            />
          }
        />
        <Route
          path="favorite-cocktails"
          element={
            <FavoriteCocktailsPage
              cocktailDetails={cocktailDetails}
              setCocktailDetails={setCocktailDetails}
            />
          }
        />
        <Route
          path="favorite-ingridients"
          element={"favorite ingridients page"}
        />
      </Route>
    </Routes>
  );
}

export default App;
