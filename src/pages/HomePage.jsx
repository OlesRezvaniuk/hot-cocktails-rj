import { SectionRandomCocktails } from "../components/SectionRandomCocktails/SectionRandomCocktails";
import { SectionCocktailsByName } from "../components/SectionCocktailsByName/SectionCocktailsByName";
import { useState } from "react";
import { getCocktailsByName } from "../components/SectionCocktailsByName/helpers/helpers";
import { wordData } from "../components/SectionCocktailsByName/helpers/helpers";
import { v4 as uuidv4 } from "uuid";
import { CocktailDetailsModal } from "../components/CocktailDetails/CocktailDetailsModal";
import { IngredientsModal } from "../components/IngredientsModal/IngredientsModal";
import { SectionHero } from "../components/SectionHero/SectionHero";
import { SearchCocktailsByName } from "../components/SearchCocktailsByName/SearchCocktailsByName";

export const HomePage = ({
  setChangeContent,
  changeContent,
  selectedButton,
  setSelectedButton,
}) => {
  const [cocktailsByName, setCocktailsByName] = useState({
    visible: false,
    data: [],
    word: null,
  });
  const [cocktailDetails, setCocktailDetails] = useState({
    cocktail: null,
    empty: true,
    visible: false,
    ingredients: { data: null, visible: false },
  });

  return (
    <main>
      <SectionHero
        setChangeContent={setChangeContent}
        cocktailsByName={cocktailsByName}
        setCocktailsByName={setCocktailsByName}
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
      />
      {changeContent ? (
        <SectionCocktailsByName cocktailsByName={cocktailsByName} />
      ) : (
        <SectionRandomCocktails
          setCocktailDetails={setCocktailDetails}
          cocktailDetails={cocktailDetails}
        />
      )}
      {cocktailDetails.cocktail !== null &&
        cocktailDetails.empty === false &&
        cocktailDetails.visible && (
          <CocktailDetailsModal
            setCocktailDetails={setCocktailDetails}
            cocktailDetails={cocktailDetails}
          />
        )}
      {cocktailDetails.ingredients.visible && (
        <IngredientsModal cocktailDetails={cocktailDetails} />
      )}
    </main>
  );
};
