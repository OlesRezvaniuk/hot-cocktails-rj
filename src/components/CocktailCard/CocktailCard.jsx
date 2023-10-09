import { firebaseRequest } from "../../firebase/firebaseRequests";
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
}) => {
  return (
    <CocktailCardBox>
      {!item ? (
        <div
          style={{
            position: "relative",
            justifyContent: "center",
            display: "flex",
            alignItems: "end",
            opacity: 0.5,
          }}
        >
          <CocktailPlug />
          <div
            style={{
              position: "absolute",
              height: 10,
              width: 20 * randomCocktails.loading,
              background: "black",
            }}
          />
        </div>
      ) : (
        <CocktailCardImg src={item ? item.strDrinkThumb : ""} />
      )}
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
            item && firebaseRequest.addFavorite(item.idDrink);
          }}
        >
          Add to
          <HeartEmpty />
        </CocktailCardButton>
      </CocktailCardButtonsBox>
    </CocktailCardBox>
  );
};
