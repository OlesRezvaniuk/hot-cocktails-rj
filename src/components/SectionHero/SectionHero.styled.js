import styled from "styled-components";
import { ReactComponent as HeroImgPrimal } from "./img/hero-img.svg";

export const HeroSectionContainer = styled.div`
  position: relative;
`;

export const HeroTitle = styled.h1`
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

export const HeroImg = styled(HeroImgPrimal)`
  position: absolute;
  right: 0px;
  top: 32px;
`;
