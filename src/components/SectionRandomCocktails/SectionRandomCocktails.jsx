import { useEffect, useState } from "react";
import { resRandomCocktails } from "./helpers/helpers";

export const SectionRandomCocktails = () => {
  const [randomCocktails, setRandomCocktails] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getRandomCocktail() {
    setLoading(true);
    const arr = [];
    for (let i = 0; i < 9; i++) {
      const data = await resRandomCocktails();
      arr.push(data);
    }
    setRandomCocktails(arr);
    setLoading(false);
  }

  useEffect(() => {
    getRandomCocktail();
    console.log(randomCocktails);
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
        {randomCocktails.length >= 9 &&
          randomCocktails.map((item) => {
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
