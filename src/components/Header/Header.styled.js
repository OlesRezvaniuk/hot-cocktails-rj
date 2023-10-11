import styled from "styled-components";

export const HeaderContainer = styled.header`
  max-width: 1280px;
  display: flex;
  align-items: center;
  position: relative;
`;

export const LogoImg = styled.img``;

export const AuthorizatedText = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-152px, -100%);
  pointer-events: none;
  color: #202025;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  opacity: 0.5;
`;
