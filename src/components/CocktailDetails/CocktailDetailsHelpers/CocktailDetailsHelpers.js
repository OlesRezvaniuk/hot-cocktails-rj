import axios from "axios";

export async function getCocktailDetails(
  id,
  cocktailDetails,
  setCocktailDetails
) {
  try {
    const { data } = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    setCocktailDetails({
      ...cocktailDetails,
      cocktail: data.drinks[0],
      empty: false,
      visible: true,
    });
  } catch (error) {
    console.log(error);
  }
}

export function createIngridientsArr({ cocktail }) {
  const arr = [];
  for (let item = 1; item < 16; item++) {
    const word = "strIngredient";
    const lastWord = word + item;
    const ingredient = "strMeasure";
    const lastIngredient = ingredient + item;
    cocktail[lastWord] !== null &&
      arr.push([
        [cocktail[lastIngredient] + " " + cocktail[lastWord]],
        cocktail[lastWord],
      ]);
  }
  return arr;
}
