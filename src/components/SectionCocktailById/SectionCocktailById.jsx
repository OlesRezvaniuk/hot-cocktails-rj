import { cocktailsSelector } from "../../redux/cocktails/cocktailsSelector";
import { authSelector } from "../../redux/auth/authSelector";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getFavoriteCocktails } from "../../redux/cocktails/cocktailsOperations";
import { getCocktailById } from "../../redux/cocktails/cocktailsOperations";
import { CocktailCard } from "../CocktailCard/CocktailCard";
import {
  CocktailsByIdList,
  SectionCocktailsByIdTitle,
  SectionCocktailsByIdBox,
} from "./SectionCocktailById.styled";
import { getCocktailDetails } from "../CocktailDetails/CocktailDetailsHelpers/CocktailDetailsHelpers";

export const SectionCocktailById = ({
  cocktailDetails,
  setCocktailDetails,
}) => {
  const dispatch = useDispatch();
  const cocktails = useSelector(cocktailsSelector);
  const { auth } = useSelector(authSelector);
  const { favoriteCocktails } = cocktails;
  const [renderData, SetRenderData] = useState(null);

  useEffect(() => {
    reqFavoriteCocktails();
  }, []);

  useEffect(() => {
    reqFavoriteCocktails();
  }, [favoriteCocktails !== null && favoriteCocktails.length]);

  async function reqFavoriteCocktails() {
    await dispatch(getFavoriteCocktails(auth.uid));
    const data = await getCocktailById(favoriteCocktails);
    SetRenderData(data);
  }

  return (
    <SectionCocktailsByIdBox>
      <SectionCocktailsByIdTitle>Favorite cocktails</SectionCocktailsByIdTitle>
      <CocktailsByIdList>
        {renderData &&
          renderData.map((item) => {
            return (
              <li key={item.idDrink}>
                <CocktailCard
                  item={item}
                  getCocktailDetails={getCocktailDetails}
                  cocktailDetails={cocktailDetails}
                  setCocktailDetails={setCocktailDetails}
                />
              </li>
            );
          })}
      </CocktailsByIdList>
    </SectionCocktailsByIdBox>
  );
};
