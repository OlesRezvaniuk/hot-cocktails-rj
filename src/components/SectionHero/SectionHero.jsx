import styled from "styled-components";
import { SearchCocktailsByName } from "../SearchCocktailsByName/SearchCocktailsByName";
import { HeroSectionContainer, HeroTitle, HeroImg } from "./SectionHero.styled";

export const SectionHero = ({
  setChangeContent,
  cocktailsByName,
  setCocktailsByName,
}) => {
  return (
    <HeroSectionContainer>
      <HeroTitle> A party wothout cocktails is not like a party</HeroTitle>
      <HeroImg />
      <SearchCocktailsByName
        setChangeContent={setChangeContent}
        cocktailsByName={cocktailsByName}
        setCocktailsByName={setCocktailsByName}
      />
    </HeroSectionContainer>
  );
};
