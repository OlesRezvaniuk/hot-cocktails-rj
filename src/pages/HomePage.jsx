import { SectionRandomCocktails } from "../components/SectionRandomCocktails/SectionRandomCocktails";
import { SectionCocktailsByName } from "../components/SectionCocktailsByName/SectionCocktailsByName";
import { useEffect, useState } from "react";
import { getCocktailsByName } from "../components/SectionCocktailsByName/helpers/helpers";
import { wordData } from "../components/SectionCocktailsByName/helpers/helpers";
import { v4 as uuidv4 } from "uuid";
import { CocktailDetailsModal } from "../components/CocktailDetails/CocktailDetailsModal";
import { IngredientsModal } from "../components/IngredientsModal/IngredientsModal";
import { SectionHero } from "../components/SectionHero/SectionHero";
import { SearchCocktailsByName } from "../components/SearchCocktailsByName/SearchCocktailsByName";
import { useDispatch } from "react-redux";
import { getFavoriteCocktails } from "../redux/cocktails/cocktailsOperations";
import { authSelector } from "../redux/auth/authSelector";
import { useSelector } from "react-redux";
import { cocktailsSelector } from "../redux/cocktails/cocktailsSelector";

export const HomePage = ({
  setChangeContent,
  changeContent,
  selectedButton,
  setSelectedButton,
}) => {
  const dispatch = useDispatch();
  const { auth } = useSelector(authSelector);
  const cocktails = useSelector(cocktailsSelector);
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

  useEffect(() => {
    console.log(auth);
    auth !== null && dispatch(getFavoriteCocktails(auth.uid));
  }, []);

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
