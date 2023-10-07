import { useState } from "react";

import {
  ThemeButtonBox,
  BollButton,
  ThemeButtonText,
  Boll,
} from "./ThemeButton.styled";

export const ThemeButton = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  function handleChangeTheme() {
    darkTheme === false ? setDarkTheme(true) : setDarkTheme(false);
  }

  return (
    <ThemeButtonBox>
      <ThemeButtonText $active={!darkTheme}>Light</ThemeButtonText>
      <BollButton onClick={handleChangeTheme}>
        <Boll $active={darkTheme} />
      </BollButton>
      <ThemeButtonText $active={darkTheme}>Dark</ThemeButtonText>
    </ThemeButtonBox>
  );
};
