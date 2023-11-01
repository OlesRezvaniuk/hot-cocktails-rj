import styled from "styled-components";

export const CocktailCardButton = styled.button`
  transition: 250ms;
  cursor: pointer;
  border-radius: 4px;
  background: ${(props) => (props.$type === "add" ? "#fff" : "#FE7031")};
  height: 48px;
  width: ${(props) => (props.$type === "add" ? "43.5%" : "56.5%")};
  color: ${(props) => (props.$type !== "add" ? "#fff" : "#FE7031")};
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 120% */
  letter-spacing: 0.4px;
  outline: 1px solid #FE7031;
      display: flex;
    justify-content: center;
    align-items: center;
  &:hover,
  &:focus {
    color: ${(props) => (props.$type !== "add" ? "#FE7031" : "#fff")};
    background: ${(props) => props.$type === "add" && "#FE7031"};
    background: ${(props) => props.$type === "learn more" && "#fff"};
    outline: ${(props) =>
      props.$type === "learn more" ? "1px solid #FE7031" : "none"}
`;
