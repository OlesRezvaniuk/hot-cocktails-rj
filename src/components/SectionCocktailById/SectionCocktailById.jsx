import { cocktailsSelector } from "../../redux/cocktails/cocktailsSelector";
import { authSelector } from "../../redux/auth/authSelector";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getFavoriteCocktails } from "../../redux/cocktails/cocktailsOperations";
import { getCocktailById } from "../../redux/cocktails/cocktailsOperations";
import { CocktailCard } from "../CocktailCard/CocktailCard";

export const SectionCocktailById = () => {
  const dispatch = useDispatch();
  const cocktails = useSelector(cocktailsSelector);
  const { auth } = useSelector(authSelector);
  const { favoriteCocktails } = cocktails;
  const [data, setData] = useState(null);

  useEffect(() => {
    getResponse();
  }, [dispatch]);

  async function favoriteCocktailsData() {
    const data = await getCocktailById(favoriteCocktails);
    setData(data);
  }

  async function getResponse() {
    if (auth.uid) {
      await dispatch(getFavoriteCocktails(auth.uid));
      favoriteCocktailsData();
    }
  }

  return (
    <div>
      <ul>
        {data &&
          data.map((item) => {
            return (
              <li key={item.idDrink}>
                <CocktailCard item={item} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};
