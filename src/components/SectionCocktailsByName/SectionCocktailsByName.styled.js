import styled from "styled-components";

export const CocktailByNameContainer = styled.div``;

export const CocktailByNameTitle = styled.h3`
  color: #202025;
  text-align: center;
  /* H2 Poppins Disktop */
  font-family: Poppins;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 72px; /* 150% */
  margin: 60px;
`;

export const RandomCocktailsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  list-style: none;
  padding-bottom: 60px;
`;
