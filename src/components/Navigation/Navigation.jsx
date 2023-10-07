import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FavoriteBox, NavigationBox } from "./Navigation.styled";

export const Navigation = () => {
  const [visible, setVisible] = useState(false);

  function handleVisibleChange() {
    !visible ? setVisible(true) : setVisible(false);
  }

  return (
    <NavigationBox>
      <NavLink to="/">Home</NavLink>
      <div
        onMouseEnter={handleVisibleChange}
        onMouseLeave={handleVisibleChange}
      >
        <span>Favorite</span>
        {visible && (
          <FavoriteBox>
            <NavLink to="favorite-cocktails">Favorite cocktails</NavLink>
            <NavLink to="favorite-ingridients">Favorite ingridients</NavLink>
          </FavoriteBox>
        )}
      </div>
    </NavigationBox>
  );
};
