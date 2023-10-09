import { getCocktailsByName } from "./helpers.js/helpers";
import { wordData } from "./helpers.js/helpers";
import { nanoid } from "nanoid";
import {
  SearchCocktailByNameContainer,
  SearchCocktailByNameTitle,
  SearchByNameButton,
  SerchByNameList,
} from "./SearchCocktailByName.styled";

export const SearchCocktailsByName = ({
  setChangeContent,
  cocktailsByName,
  setCocktailsByName,
  selectedButton,
  setSelectedButton,
}) => {
  return (
    <SearchCocktailByNameContainer>
      <SearchCocktailByNameTitle>
        Search your favorite cocktail by ABC
      </SearchCocktailByNameTitle>
      <SerchByNameList>
        {wordData.map((item) => {
          return (
            <li key={nanoid()}>
              <SearchByNameButton
                $isSelected={selectedButton === item}
                onClick={() => {
                  getCocktailsByName({
                    word: item,
                    cocktailsByName,
                    setCocktailsByName,
                  });
                  setChangeContent(true);
                  setSelectedButton(item);
                }}
              >
                {item}
              </SearchByNameButton>
            </li>
          );
        })}
      </SerchByNameList>
    </SearchCocktailByNameContainer>
  );
};
