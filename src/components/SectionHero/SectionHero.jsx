import styled from "styled-components";
import { SearchCocktailsByName } from "../SearchCocktailsByName/SearchCocktailsByName";
import { HeroSectionContainer, HeroTitle, HeroImg } from "./SectionHero.styled";
import { useState } from "react";

export const SectionHero = ({
  setChangeContent,
  cocktailsByName,
  setCocktailsByName,
  selectedButton,
  setSelectedButton,
}) => {
  return (
    <HeroSectionContainer>
      <HeroTitle>A party without cocktails is not like a party</HeroTitle>
      <HeroImg />
      <SearchCocktailsByName
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
        setChangeContent={setChangeContent}
        cocktailsByName={cocktailsByName}
        setCocktailsByName={setCocktailsByName}
      />
    </HeroSectionContainer>
  );
};
