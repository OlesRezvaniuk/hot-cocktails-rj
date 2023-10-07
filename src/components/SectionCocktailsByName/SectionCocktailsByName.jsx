import { useState } from "react";
import { CocktailByNameTitle } from "./SectionCocktailsByName.styled";

export const SectionCocktailsByName = ({ cocktailsByName }) => {
  return (
    <div>
      <CocktailByNameTitle>Searching results</CocktailByNameTitle>
      {cocktailsByName.visible &&
        cocktailsByName.data.map((item) => {
          return (
            <li key={item.idDrink}>
              <img style={{ width: "calc(100%/5)" }} src={item.strDrinkThumb} />
              <p>{item.strDrink}</p>
              <button>Learn More</button>
              <button>Add to</button>
            </li>
          );
        })}
    </div>
  );
};
