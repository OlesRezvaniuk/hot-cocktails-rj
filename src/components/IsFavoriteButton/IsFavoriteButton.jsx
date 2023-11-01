import { CocktailCardButton } from "./IsFavoriteButton.styled";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { favoriteActionRequests } from "../CocktailCard/service/favoriteActionRequests";
import { useLocation } from "react-router-dom";
import { authSelector, tokenSelector } from "../../redux/auth/authSelector";
import { useState } from "react";
import { HeartEmpty } from "../CocktailCard/CocktailCard.styled";

export const IsFavoriteButton = ({ item }) => {
  const { pathname } = useLocation();
  const { auth } = useSelector(authSelector);
  const dispatch = useDispatch();
  const token = useSelector(tokenSelector);
  const [changeFavorite, setChangeFavorite] = useState(false);
  return (
    <CocktailCardButton
      $type={"add"}
      onClick={async () => {
        token &&
          favoriteActionRequests(
            changeFavorite,
            pathname,
            item,
            dispatch,
            auth
          );
        setChangeFavorite(!changeFavorite);
      }}
    >
      {changeFavorite || pathname === "/favorite-cocktails" ? "remove" : "add"}
      <HeartEmpty />
    </CocktailCardButton>
  );
};
