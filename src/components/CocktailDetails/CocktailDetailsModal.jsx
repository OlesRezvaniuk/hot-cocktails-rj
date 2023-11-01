import { nanoid } from "nanoid";
import { createIngridientsArr } from "./CocktailDetailsHelpers/CocktailDetailsHelpers";
import { getIngredientsInfo } from "../IngredientsModal/IngredientsModalHelpers/IngredientsModalHelpers";
import {
  CocktailDetailsModalBackdrop,
  CocktailDetailsModalBox,
  CocktailDetailsImg,
  CocktailDetailsTitle,
  CocktailDetailsInfoBox,
  CocktailDetailsIngridients,
  IngridientsPerCocktail,
  CocktailDetailsIngridientsList,
  CocktailDetailsIngridientButton,
  InstuctionBox,
  InstructionBoxTitle,
  InstructionsText,
} from "./CocktailDetailsModal.styled";
import { IsFavoriteButton } from "../IsFavoriteButton/IsFavoriteButton";

export const CocktailDetailsModal = ({
  setCocktailDetails,
  cocktailDetails,
}) => {
  const { strDrink, strDrinkThumb, strInstructions } = cocktailDetails.cocktail;

  return (
    <CocktailDetailsModalBackdrop
      id="detailsBackdrop"
      onClick={(e) => {
        if (e.target.id === "detailsBackdrop") {
          document.body.style.overflow = "scroll";
          setCocktailDetails({
            ...cocktailDetails,
            cocktail: null,
            empty: true,
            visible: false,
          });
        }
      }}
    >
      <CocktailDetailsModalBox>
        <CocktailDetailsInfoBox>
          <CocktailDetailsImg src={strDrinkThumb} alt="Img" />
          <div style={{ transform: "translateY(40px)" }}>
            <CocktailDetailsTitle>{strDrink}</CocktailDetailsTitle>
            <CocktailDetailsIngridients>Ingridients</CocktailDetailsIngridients>
            <IngridientsPerCocktail>Per cocktail</IngridientsPerCocktail>
            <CocktailDetailsIngridientsList>
              {createIngridientsArr(cocktailDetails).map((item) => {
                return (
                  <li key={nanoid()}>
                    <CocktailDetailsIngridientButton
                      onClick={() => {
                        getIngredientsInfo({
                          name: item[1],
                          setCocktailDetails,
                          cocktailDetails,
                        });
                      }}
                    >
                      <span style={{ marginRight: 8 }}>✶</span>
                      {item[0]}
                    </CocktailDetailsIngridientButton>
                  </li>
                );
              })}
            </CocktailDetailsIngridientsList>
          </div>
        </CocktailDetailsInfoBox>
        <InstuctionBox>
          <InstructionBoxTitle>Instructions:</InstructionBoxTitle>
          <InstructionsText>{strInstructions}</InstructionsText>
        </InstuctionBox>
        <IsFavoriteButton item={cocktailDetails.cocktail} />
      </CocktailDetailsModalBox>
    </CocktailDetailsModalBackdrop>
  );
};
