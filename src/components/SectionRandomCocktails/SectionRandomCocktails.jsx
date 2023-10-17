import { useEffect, useState } from "react";
import { resRandomCocktails, getRandomCocktail } from "./helpers/helpers";
import { getCocktailDetails } from "../CocktailDetails/CocktailDetailsHelpers/CocktailDetailsHelpers";
import { nanoid } from "nanoid";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { cocktailsSelector } from "../../redux/cocktails/cocktailsSelector";
import {
  SectionRandomCocktailTitle,
  RandomCocktailsList,
} from "./SectionRandomCocktails.styled";
import { CocktailCard } from "../CocktailCard/CocktailCard";
import { getFavoriteCocktails } from "../../redux/cocktails/cocktailsOperations";
import { authSelector } from "../../redux/auth/authSelector";
import { useDispatch } from "react-redux";

export const SectionRandomCocktails = ({
  setCocktailDetails,
  cocktailDetails,
}) => {
  const cocktails = useSelector(cocktailsSelector);
  const [randomCocktails, setRandomCocktails] = useState({
    visible: false,
    data: [{}, {}, {}, {}, {}, {}, {}, {}, {}],
    loading: 1,
  });
  const [loading, setLoading] = useState(false);
  const { auth } = useSelector(authSelector);
  const dispatch = useDispatch();

  async function getCocktails() {
    auth !== null && (await getFavoriteCocktails(auth.uid));
    console.log("getted favorite", cocktails.favoriteCocktails);
    await getRandomCocktail(
      setLoading,
      setRandomCocktails,
      randomCocktails,
      resRandomCocktails,
      cocktails
    );
    console.log("getted random cocktails");
  }

  useEffect(() => {
    getCocktails();
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyModalClose);
    return () => {
      window.removeEventListener("keydown", handleKeyModalClose);
    };
  }, [cocktailDetails.visible]);

  function searchFavorite() {
    for (const e in cocktails.favoriteCocktails) {
      const filter = randomCocktails.data.filter(
        (item) => item.idDrink === cocktails.favoriteCocktails[e]
      );
    }
  }
  searchFavorite();

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
      <RandomCocktailsList>
        {randomCocktails.data.map((item) => {
          return (
            <li key={!item.idDrink ? nanoid() : item.idDrink}>
              <CocktailCard
                loading={loading}
                item={item}
                getCocktailDetails={getCocktailDetails}
                cocktailDetails={cocktailDetails}
                setCocktailDetails={setCocktailDetails}
                randomCocktails={randomCocktails}
                setRandomCocktails={setRandomCocktails}
              />
            </li>
          );
        })}
      </RandomCocktailsList>
    </div>
  );
};
