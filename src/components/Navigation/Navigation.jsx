import { NavLink } from "react-router-dom";
import { useState } from "react";
import {
  FavoriteBox,
  NavigationBox,
  NavLinkStyled,
  FavoriteStyled,
} from "./Navigation.styled";

export const Navigation = () => {
  const [visible, setVisible] = useState(false);

  function handleVisibleChange() {
    !visible ? setVisible(true) : setVisible(false);
  }

  return (
    <NavigationBox>
      <NavLinkStyled to="/">Home</NavLinkStyled>
      <div
        style={{ position: "relative" }}
        onMouseEnter={handleVisibleChange}
        onMouseLeave={handleVisibleChange}
      >
        <FavoriteStyled>Favorite</FavoriteStyled>
        {visible && (
          <FavoriteBox>
            <NavLinkStyled
              favorite="true"
              onClick={() => {
                setVisible(false);
              }}
              to="favorite-cocktails"
            >
              Favorite cocktails
            </NavLinkStyled>
            <NavLinkStyled
              favorite="true"
              onClick={() => {
                setVisible(false);
              }}
              to="favorite-ingridients"
            >
              Favorite ingridients
            </NavLinkStyled>
          </FavoriteBox>
        )}
      </div>
    </NavigationBox>
  );
};
