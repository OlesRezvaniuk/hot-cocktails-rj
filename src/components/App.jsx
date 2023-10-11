import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { Layout } from "./Layout/Layout";
import { useState } from "react";
import { FavoriteCocktailsPage } from "../pages/FavoriteCocktailsPage";

function App() {
  const [changeContent, setChangeContent] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);

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
            />
          }
        />
        <Route path="favorite-cocktails" element={<FavoriteCocktailsPage />} />
        <Route
          path="favorite-ingridients"
          element={"favorite ingridients page"}
        />
      </Route>
    </Routes>
  );
}

export default App;
