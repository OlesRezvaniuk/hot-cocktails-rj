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
    let data = await resRandomCocktails();
    data = { ...data, favorite: false };
    if (randomCocktails.data.some((item) => item.idDrink === data.idDrink)) {
      return;
    } else {
      setRandomCocktails({
        ...randomCocktails,
        loading: randomCocktails.loading + arr.length,
      });
      randomCocktails.data[i] = data;
    }
  }
  setRandomCocktails({ ...randomCocktails, visible: true });
  setLoading(false);
}
