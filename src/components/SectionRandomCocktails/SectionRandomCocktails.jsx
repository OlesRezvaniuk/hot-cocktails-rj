import { useEffect, useState } from "react";
import { resRandomCocktails, getRandomCocktail } from "./helpers/helpers";
import { getCocktailDetails } from "../CocktailDetails/CocktailDetailsHelpers/CocktailDetailsHelpers";
import { nanoid } from "nanoid";
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
  console.log(randomCocktails);

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

  function skeleton() {
    const arr = [];
    for (let i = 0; i < 9; i++) {
      arr.push(i);
    }
    return arr;
  }

  return (
    <div>
      <SectionRandomCocktailTitle>Cocktails</SectionRandomCocktailTitle>
      <RandomCocktailsList>
        {randomCocktails.data.length === 9
          ? randomCocktails.data.map((item) => {
              return (
                <li key={item.idDrink}>
                  <CocktailCard
                    loading={loading}
                    item={item}
                    getCocktailDetails={getCocktailDetails}
                    cocktailDetails={cocktailDetails}
                    setCocktailDetails={setCocktailDetails}
                  />
                </li>
              );
            })
          : skeleton().map(() => {
              return (
                <li key={nanoid()}>
                  <CocktailCard
                    loading={loading}
                    getCocktailDetails={getCocktailDetails}
                    cocktailDetails={cocktailDetails}
                    setCocktailDetails={setCocktailDetails}
                    randomCocktails={randomCocktails}
                  />
                </li>
              );
            })}
        {/* {randomCocktails.data.map((item) => {
          return (
            <li key={item.idDrink}>
              <CocktailCard
                loading={loading}
                item={item}
                getCocktailDetails={getCocktailDetails}
                cocktailDetails={cocktailDetails}
                setCocktailDetails={setCocktailDetails}
              />
            </li>
          );
        })} */}
      </RandomCocktailsList>
    </div>
  );
};
