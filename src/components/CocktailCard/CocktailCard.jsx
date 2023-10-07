import { firebaseRequest } from "../../firebase/firebaseRequests";
import { CocktailCardImg } from "./CocktailCard.styled";

export const CocktailCard = ({
  item,
  getCocktailDetails,
  cocktailDetails,
  setCocktailDetails,
}) => {
  return (
    <>
      <CocktailCardImg src={item.strDrinkThumb} />
      <p>{item.strDrink}</p>
      <button
        onClick={(e) => {
          getCocktailDetails(item.idDrink, cocktailDetails, setCocktailDetails);
        }}
      >
        Learn More
      </button>
      <button
        onClick={() => {
          firebaseRequest.addFavorite(item.idDrink);
        }}
      >
        Add to
      </button>
    </>
  );
};
