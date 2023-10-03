import { useState } from "react";

export const SectionCocktailsByName = ({ cocktailsByName }) => {
  return (
    <div>
      <div>
        {cocktailsByName.visible &&
          cocktailsByName.data.map((item) => {
            return (
              <li key={item.idDrink}>
                <img
                  style={{ width: "calc(100%/5)" }}
                  src={item.strDrinkThumb}
                />
                <p>{item.strDrink}</p>
                <button>Learn More</button>
                <button>Add to</button>
              </li>
            );
          })}
      </div>
    </div>
  );
};
