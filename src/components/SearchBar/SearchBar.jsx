import {
  SearchBarContainer,
  SearchBarInput,
  SearchBarButton,
  SearchIcon,
} from "./SearchBar.styled";

export const SearchBar = () => {
  return (
    <SearchBarContainer>
      <SearchBarButton
        onClick={() => {
          console.log("search");
        }}
      >
        <SearchIcon />
      </SearchBarButton>
      <SearchBarInput type="text" placeholder="Search" />
    </SearchBarContainer>
  );
};
