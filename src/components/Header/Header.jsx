import { Navigation } from "../Navigation/Navigation";
import { Auth } from "../Auth/Auth";
import Logo from "../Header/img/logo.png";
import { HeaderContainer, LogoImg, ThemeButton } from "./Header.styled";

export const Header = () => {
  return (
    <HeaderContainer>
      <LogoImg src={Logo} alt="Logo" width={156} height={43} />
      <Navigation />
      <div>
        <button>search</button>
        <input type="text" />
      </div>
      <Auth />
      <button>Theme</button>
    </HeaderContainer>
  );
};
