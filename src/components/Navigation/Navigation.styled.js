import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavigationBox = styled.div`
  display: flex;
  gap: 60px;
  margin-left: 43px;
  align-self: end;
`;

export const FavoriteBox = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: max-content;
  left: -12px;
  border-radius: 4px;
  border: 1px solid #fd5103;
  background: #fff;
`;

export const NavLinkStyled = styled(NavLink)`
  padding: ${(props) => props.favorite && "12px"};
  transition: 250ms;
  text-decoration: none;
  color: var(--Black, #202025);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  letter-spacing: 0.36px;
  &:focus,
  &: hover {
    color: ${(props) => (props.favorite ? "#fff" : "#fd5103")};
    background: ${(props) => props.favorite && "#fd5103"};
  }
`;

export const FavoriteStyled = styled.span`
  transition: 250ms;
  cursor: pointer;
  color: var(--Black, #202025);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  letter-spacing: 0.36px;
  &:focus,
  &: hover {
    color: #fd5103;
  }
`;
