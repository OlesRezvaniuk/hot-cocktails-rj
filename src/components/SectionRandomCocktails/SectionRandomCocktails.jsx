import { useEffect, useState } from "react";
import { resRandomCocktails, getRandomCocktail } from "./helpers/helpers";
import { getCocktailDetails } from "../CocktailDetails/CocktailDetailsHelpers/CocktailDetailsHelpers";

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
      <h2>Cocktails</h2>
      {loading && (
        <div
          style={{
            height: 10,
            width: 20 * randomCocktails.loading,
            background: "black",
          }}
        />
      )}
      <ul style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        {randomCocktails.visible &&
          randomCocktails.data.map((item) => {
            return (
              <li key={item.idDrink}>
                <img
                  style={{ width: "calc(100%/5)" }}
                  src={item.strDrinkThumb}
                />
                <p>{item.strDrink}</p>
                <button
                  onClick={(e) => {
                    getCocktailDetails(
                      item.idDrink,
                      cocktailDetails,
                      setCocktailDetails
                    );
                  }}
                >
                  Learn More
                </button>
                <button>Add to</button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
