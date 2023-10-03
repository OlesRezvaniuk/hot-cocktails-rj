import axios from "axios";

export async function resRandomCocktails() {
  try {
    const res = await axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    const resData = res.data.drinks[0];
    return resData;
  } catch (error) {
    console.log(error);
  }
}

export async function getRandomCocktail(
  setLoading,
  setRandomCocktails,
  randomCocktails,
  resRandomCocktails
) {
  setLoading(true);
  const arr = [];
  for (let i = 0; i < 9; i++) {
    const data = await resRandomCocktails();
    arr.push(data);
  }
  setRandomCocktails({ ...randomCocktails, data: arr, visible: true });
  setLoading(false);
}
