import { Navigation } from "../Navigation/Navigation";
import { Auth } from "../Auth/Auth";
import Logo from "../Header/img/logo.png";
import { HeaderContainer, LogoImg, ThemeButton } from "./Header.styled";
import { SearchBar } from "../SearchBar/SearchBar";

export const Header = () => {
  return (
    <HeaderContainer>
      <LogoImg src={Logo} alt="Logo" width={156} height={43} />
      <Navigation />
      <SearchBar />
      <Auth />
      <button>Theme</button>
    </HeaderContainer>
  );
};
