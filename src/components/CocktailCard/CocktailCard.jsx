import { firebaseRequest } from "../../firebase/firebaseRequests";
import plugImage from "./img/plug-cocktail-img.svg";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { authSelector, tokenSelector } from "../../redux/auth/authSelector";
import {
  CocktailCardBox,
  CocktailCardImg,
  CocktailCardTitle,
  CocktailCardButtonsBox,
  CocktailCardButton,
  HeartEmpty,
  CocktailPlug,
  loader,
} from "./CocktailCard.styled";

export const CocktailCard = ({
  item,
  getCocktailDetails,
  cocktailDetails,
  setCocktailDetails,
  randomCocktails,
  loading,
}) => {
  const { auth } = useSelector(authSelector);
  const token = useSelector(tokenSelector);
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
          onClick={() => {
            token &&
              firebaseRequest.addFavorite({
                itemId: item.idDrink,
                userId: auth.uid,
              });
          }}
        >
          Add to
          <HeartEmpty />
        </CocktailCardButton>
      </CocktailCardButtonsBox>
    </CocktailCardBox>
  );
};
