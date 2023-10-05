import axios from "axios";

export async function getIngredientsInfo({
  name,
  setCocktailDetails,
  cocktailDetails,
}) {
  try {
    const { data } = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?url=https:%2F%2Fwww.thecocktaildb.com%2Fapi%2Fjson%2Fv1%2F1%2Fsearch.php&i=${name}`
    );
    const ingredientData = data.ingredients[0];
    setCocktailDetails({
      ...cocktailDetails,
      ingredients: { data: ingredientData, visible: true },
    });
    return ingredientData;
  } catch (error) {
    console.log(error);
  }
}

export function modifyIngredientInfo(data) {
  const arr = [];
  arr.push(data.strType, data.strABV === null ? data.strAlcohol : data.strABV);
  return arr;
}
