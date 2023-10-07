import styled from "styled-components";

export const SearchCocktailByNameContainer = styled.div`
  padding-top: 36px;
  padding-bottom: 192px;
`;

export const SearchCocktailByNameTitle = styled.h2`
  color: #202025;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 155.556% */
  letter-spacing: 0.36px;
  opacity: 0.8;
  margin-bottom: 40px;
  pointer-events: none;
`;

export const SerchByNameList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  width: 520px;
`;

export const SearchByNameButton = styled.button`
  color: #5f6775;
  text-align: center;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 40px;
  height: 40px;
  text-transform: uppercase;
  cursor: pointer;
  background: none;
  transition: 250ms;
  &:hover,
  &:focus {
    color: #fd5103;
  }
  ${(props) =>
    props.$isSelected &&
    `
  background: #fd5103;
  color: #fff;
  `}
`;
