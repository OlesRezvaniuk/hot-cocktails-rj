import { useState } from "react";
import {
  CocktailByNameTitle,
  RandomCocktailsList,
} from "./SectionCocktailsByName.styled";
import { CocktailCard } from "../CocktailCard/CocktailCard";
import { getCocktailDetails } from "../CocktailDetails/CocktailDetailsHelpers/CocktailDetailsHelpers";

export const SectionCocktailsByName = ({
  cocktailsByName,
  cocktailDetails,
  setCocktailDetails,
  randomCocktails,
  setRandomCocktails,
  loading,
  setLoading,
}) => {
  return (
    <div>
      <CocktailByNameTitle>Searching results</CocktailByNameTitle>
      {cocktailsByName.visible && (
        <RandomCocktailsList>
          {cocktailsByName.data.map((item) => {
            return (
              <li key={item.idDrink}>
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
      )}
    </div>
  );
};
