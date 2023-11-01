import plugImage from "./img/plug-cocktail-img.svg";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { authSelector, tokenSelector } from "../../redux/auth/authSelector";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { favoriteActionRequests } from "./service/favoriteActionRequests";
import { IsFavoriteButton } from "../IsFavoriteButton/IsFavoriteButton";
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
import { useEffect, useState } from "react";

export const CocktailCard = ({
  item,
  getCocktailDetails,
  cocktailDetails,
  setCocktailDetails,
}) => {
  const { pathname } = useLocation();
  const { auth } = useSelector(authSelector);
  const [changeFavorite, setChangeFavorite] = useState(false);
  const token = useSelector(tokenSelector);
  const dispatch = useDispatch();

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
          onClick={() => {
            document.body.style.overflow = "hidden";
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
        <IsFavoriteButton item={item} />
      </CocktailCardButtonsBox>
    </CocktailCardBox>
  );
};
