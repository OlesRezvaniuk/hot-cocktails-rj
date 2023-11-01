import styled from "styled-components";

export const SectionCocktailsByIdBox = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
`;

export const SectionCocktailsByIdTitle = styled.h3`
  color: #000;
  text-align: center;
  /* H2 Poppins Disktop */
  font-family: Poppins;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 72px; /* 150% */
  margin-bottom: 60px;
`;

export const CocktailsByIdList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  list-style: none;
`;
