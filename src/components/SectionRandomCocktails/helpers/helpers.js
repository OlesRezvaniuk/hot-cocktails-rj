import axios from "axios";

export async function resRandomCocktails() {
  try {
    const res = await axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    const resData = res.data.drinks[0];
    return resData;
  } catch (error) {}
}
