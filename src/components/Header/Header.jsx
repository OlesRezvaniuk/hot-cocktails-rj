import { Navigation } from "../Navigation/Navigation";
import { Auth } from "../Auth/Auth";
import Logo from "../Header/img/logo.png";
import { HeaderContainer, LogoImg, AuthorizatedText } from "./Header.styled";
import { SearchBar } from "../SearchBar/SearchBar";
import { ThemeButton } from "../ThemeButton/ThemeButton";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { authSelector } from "../../redux/auth/authSelector";
import { collection, doc, setDoc } from "firebase/firestore";
import exportFirebase from "../../firebase/firebase";

export const Header = ({ setChangeContent, setSelectedButton }) => {
  const { auth } = useSelector(authSelector);

  const citiesRef = collection(exportFirebase.db, "cities");

  return (
    <HeaderContainer>
      <AuthorizatedText>
        {auth !== null ? auth.displayName : "Please authorizated"}
      </AuthorizatedText>
      <LogoImg src={Logo} alt="Logo" width={156} height={43} />
      <Navigation
        setChangeContent={setChangeContent}
        setSelectedButton={setSelectedButton}
      />
      <SearchBar />
      <Auth />
      <ThemeButton />
    </HeaderContainer>
  );
};
