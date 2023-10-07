import axios from "axios";

export async function getCocktailsByName({
  word,
  cocktailsByName,
  setCocktailsByName,
}) {
  try {
    const { data } = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${word}`
    );
    const res = data.drinks.slice(0, 9);
    setCocktailsByName({ ...cocktailsByName, data: res, visible: true });
    return res;
  } catch (error) {
    console.log(error);
  }
}

export const wordData = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
];
