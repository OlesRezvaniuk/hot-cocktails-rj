import { SectionCocktailById } from "../components/SectionCocktailById/SectionCocktailById";
import { CocktailDetailsModal } from "../components/CocktailDetails/CocktailDetailsModal";

export const FavoriteCocktailsPage = ({
  cocktailDetails,
  setCocktailDetails,
}) => {
  return (
    <>
      <SectionCocktailById
        cocktailDetails={cocktailDetails}
        setCocktailDetails={setCocktailDetails}
      />
      {cocktailDetails.cocktail !== null &&
        cocktailDetails.empty === false &&
        cocktailDetails.visible && (
          <CocktailDetailsModal
            setCocktailDetails={setCocktailDetails}
            cocktailDetails={cocktailDetails}
          />
        )}
    </>
  );
};
