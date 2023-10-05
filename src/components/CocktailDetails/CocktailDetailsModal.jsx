import { nanoid } from "nanoid";
import { createIngridientsArr } from "./CocktailDetailsHelpers/CocktailDetailsHelpers";

export const CocktailDetailsModal = ({
  setCocktailDetails,
  cocktailDetails,
}) => {
  const { strDrink, strDrinkThumb, strInstructions } = cocktailDetails.cocktail;

  return (
    <div style={{ width: 300, height: 300, background: "grey" }}>
      <div>
        <div>
          <img src={strDrinkThumb} alt="Img" />
          <div>
            <h3>{strDrink}</h3>
            <h4>Ingridients</h4>
            <p>Per cocktail</p>
            <ul>
              {createIngridientsArr(cocktailDetails).map((item) => {
                return (
                  <li key={nanoid()}>
                    <button onClick={() => console.log(item[1].join(""))}>
                      {item[0]}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div>
          <h3>Instructions:</h3>
          <p>{strInstructions}</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};
