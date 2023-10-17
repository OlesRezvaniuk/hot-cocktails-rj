import plugImage from "./img/plug-cocktail-img.svg";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { authSelector, tokenSelector } from "../../redux/auth/authSelector";
import { useDispatch } from "react-redux";
import {
  deleteFavorite,
  removeFavorite,
} from "../../redux/cocktails/cocktailsOperations";
import {
  CocktailCardBox,
  CocktailCardImg,
  CocktailCardTitle,
  CocktailCardButtonsBox,
  CocktailCardButton,
  HeartEmpty,
  // CocktailPlug,
  // loader,
} from "./CocktailCard.styled";
import {
  addFavorite,
  getFavoriteCocktails,
} from "../../redux/cocktails/cocktailsOperations";
import { useEffect, useState } from "react";

export const CocktailCard = ({
  item,
  getCocktailDetails,
  cocktailDetails,
  setCocktailDetails,
  randomCocktails,
  loading,
  getCocktails,
  setRandomCocktails,
}) => {
  const { auth } = useSelector(authSelector);
  const [changeFavorite, setChangeFavorite] = useState(false);
  const token = useSelector(tokenSelector);
  const dispatch = useDispatch();

  function handleChangeFavorite() {
    const index = randomCocktails.data.findIndex(
      (el) => el.idDrink === item.idDrink
    );
    return index;
  }

  async function favoriteActionRequests() {
    if (!changeFavorite) {
      await dispatch(
        addFavorite({
          data: { itemId: item.idDrink, userId: auth.uid },
        })
      );
      console.log("add");
    } else {
      console.log("remove");
      await dispatch(
        removeFavorite({
          data: { itemId: item.idDrink, userId: auth.uid },
        })
      );
    }
  }

  return (
    <CocktailCardBox>
      <CocktailCardImg
        width={320}
        height={320}
        src={item.strDrinkThumb ? item.strDrinkThumb : plugImage}
      />

      <CocktailCardTitle>{item ? item.strDrink : "Title"}</CocktailCardTitle>
      <CocktailCardButtonsBox>
        <CocktailCardButton
          $type={"learn more"}
          onClick={(e) => {
            item &&
              getCocktailDetails(
                item.idDrink,
                cocktailDetails,
                setCocktailDetails
              );
          }}
        >
          Learn More
        </CocktailCardButton>
        <CocktailCardButton
          $type={"add"}
          onClick={async () => {
            token && favoriteActionRequests();
            setChangeFavorite(!changeFavorite);
          }}
        >
          {changeFavorite ? "remove" : "add"}
          <HeartEmpty />
        </CocktailCardButton>
      </CocktailCardButtonsBox>
    </CocktailCardBox>
  );
};
