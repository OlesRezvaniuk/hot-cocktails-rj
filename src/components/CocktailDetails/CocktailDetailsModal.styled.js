import styled from "styled-components";

export const CocktailDetailsModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: contrast(0.5);
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const CocktailDetailsModalBox = styled.div`
  position: relative;
  width: 822px;
  height: 598px;
  background: #fff;
  padding: 40px 28px 28px 28px;
  box-sizing: border-box;
`;

export const CocktailDetailsImg = styled.img`
  height: 320px;
  max-width: 288px;
  object-fit: fill;
  border-bottom-right-radius: 4px;
`;

export const CocktailDetailsTitle = styled.h3`
  pointer-events: none;
  color: var(--Black, #202025);
  font-family: Roboto;
  font-size: 32px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  margin-bottom: 28px;
`;

export const CocktailDetailsIngridients = styled.h4`
  pointer-events: none;
  color: var(--Black, #202025);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 8px;
`;
export const IngridientsPerCocktail = styled.h4`
  pointer-events: none;
  color: var(--Black, #202025);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-bottom: 8px;
`;

export const CocktailDetailsInfoBox = styled.div`
  display: flex;
  gap: 32px;
  transform: translate(-28px, -40px);
  margin-bottom: 28px;
`;

export const CocktailDetailsIngridientsList = styled.ul`
  list-style: none;
`;

export const CocktailDetailsIngridientButton = styled.button`
  background: none;
  cursor: pointer;
  transition: 250ms;
  color: var(--Gray, #5f6775);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  &:focus,
  &:hover {
    color: #fd5103;
  }
`;

export const InstuctionBox = styled.div`
  transform: translateY(-40px);
`;

export const InstructionBoxTitle = styled.h3`
  color: var(--Main-black, #000917);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px; /* 162.5% */
  text-transform: uppercase;
  margin-bottom: 24px;
  pointer-events: none;
`;

export const InstructionsText = styled.p`
  color: var(--Gray, #5f6775);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 175% */
  pointer-events: none;
`;
