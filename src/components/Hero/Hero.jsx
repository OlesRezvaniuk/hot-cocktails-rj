import styled from "styled-components";

const HeroTitle = styled.h1`
  color: #fd5103;
  font-family: Poppins;
  font-size: 52px;
  font-style: normal;
  font-weight: 600;
  line-height: 80px; /* 153.846% */
  width: 684px;
  padding-top: 93px;
  pointer-events: none;
`;

export const Hero = () => {
  return <HeroTitle>A party wothout cocktails is not like a party</HeroTitle>;
};
