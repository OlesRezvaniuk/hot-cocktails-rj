import { useEffect, useState } from "react";
import { resRandomCocktails, getRandomCocktail } from "./helpers/helpers";

export const SectionRandomCocktails = () => {
  const [randomCocktails, setRandomCocktails] = useState({
    visible: false,
    data: [],
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getRandomCocktail(
      setLoading,
      setRandomCocktails,
      randomCocktails,
      resRandomCocktails
    );
  }, [randomCocktails.length < 9]);

  return (
    <div>
      <h2>Cocktails</h2>
      {loading && (
        <p style={{ color: "red", fontWeight: "bold", textAlign: "center" }}>
          Loading . . .
        </p>
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
                <button>Learn More</button>
                <button>Add to</button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
