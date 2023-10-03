import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="favorite-cocktails">Favorite cocktails</NavLink>
      <NavLink to="favorite-ingridients">Favorite ingridients</NavLink>
      <NavLink to="personal-acount">Personal acount</NavLink>
    </div>
  );
};
