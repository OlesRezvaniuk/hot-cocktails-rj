import { firebaseRequest } from "../../firebase/firebaseRequests";
import {
  CocktailCardBox,
  CocktailCardImg,
  CocktailCardTitle,
  CocktailCardButtonsBox,
  CocktailCardButton,
  HeartEmpty,
} from "./CocktailCard.styled";

export const CocktailCard = ({
  item,
  getCocktailDetails,
  cocktailDetails,
  setCocktailDetails,
}) => {
  return (
    <CocktailCardBox>
      <CocktailCardImg src={item.strDrinkThumb} />
      <CocktailCardTitle>{item.strDrink}</CocktailCardTitle>
      <CocktailCardButtonsBox>
        <CocktailCardButton
          $type={"learn more"}
          onClick={(e) => {
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
            firebaseRequest.addFavorite(item.idDrink);
          }}
        >
          Add to
          <HeartEmpty />
        </CocktailCardButton>
      </CocktailCardButtonsBox>
    </CocktailCardBox>
  );
};
