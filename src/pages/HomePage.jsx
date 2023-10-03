import { SectionRandomCocktails } from "../components/SectionRandomCocktails/SectionRandomCocktails";
import { SectionCocktailsByName } from "../components/SectionCocktailsByName/SectionCocktailsByName";
import { useState } from "react";
import { getCocktailsByName } from "../components/SectionCocktailsByName/helpers/helpers";
import { wordData } from "../components/SectionCocktailsByName/helpers/helpers";
import { v4 as uuidv4 } from "uuid";

export const HomePage = () => {
  const [changeContent, setChangeContent] = useState(false);
  const [cocktailsByName, setCocktailsByName] = useState({
    visible: false,
    data: [],
  });
  console.log(changeContent);

  return (
    <div style={{ width: 1280 }}>
      <h1>A party wothout cocktails is not like a party</h1>
      <ul style={{ display: "flex" }}>
        {wordData.map((item) => {
          return (
            <li key={uuidv4()}>
              <button
                onClick={() => {
                  getCocktailsByName({
                    word: item,
                    cocktailsByName,
                    setCocktailsByName,
                  });
                  setChangeContent(true);
                }}
              >
                {item}
              </button>
            </li>
          );
        })}
      </ul>
      {changeContent ? (
        <SectionCocktailsByName cocktailsByName={cocktailsByName} />
      ) : (
        <SectionRandomCocktails />
      )}
    </div>
  );
};
