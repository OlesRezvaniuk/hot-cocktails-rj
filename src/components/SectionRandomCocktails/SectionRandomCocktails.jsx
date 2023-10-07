import { useEffect, useState } from "react";
import { resRandomCocktails, getRandomCocktail } from "./helpers/helpers";
import { getCocktailDetails } from "../CocktailDetails/CocktailDetailsHelpers/CocktailDetailsHelpers";
import { firebaseRequest } from "../../firebase/firebaseRequests";
import {
  SectionRandomCocktailTitle,
  RandomCocktailsList,
} from "./SectionRandomCocktails.styled";
import { CocktailCard } from "../CocktailCard/CocktailCard";

export const SectionRandomCocktails = ({
  setCocktailDetails,
  cocktailDetails,
}) => {
  const [randomCocktails, setRandomCocktails] = useState({
    visible: false,
    data: [],
    loading: 1,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getRandomCocktail(
      setLoading,
      setRandomCocktails,
      randomCocktails,
      resRandomCocktails
    );
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyModalClose);
    return () => {
      window.removeEventListener("keydown", handleKeyModalClose);
    };
  }, [cocktailDetails.visible]);

  function handleKeyModalClose(e) {
    if (e.code === "Escape") {
      setCocktailDetails({
        cocktail: null,
        empty: true,
        visible: false,
      });
    }
  }

  return (
    <div>
      <SectionRandomCocktailTitle>Cocktails</SectionRandomCocktailTitle>
      {loading && (
        <div
          style={{
            height: 10,
            width: 20 * randomCocktails.loading,
            background: "black",
          }}
        />
      )}
      <RandomCocktailsList>
        {randomCocktails.visible &&
          randomCocktails.data.map((item) => {
            return (
              <li key={item.idDrink}>
                <CocktailCard
                  item={item}
                  getCocktailDetails={getCocktailDetails}
                  cocktailDetails={cocktailDetails}
                  setCocktailDetails={setCocktailDetails}
                />
              </li>
            );
          })}
      </RandomCocktailsList>
    </div>
  );
};
