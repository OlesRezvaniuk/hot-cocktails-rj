import styled from "styled-components";
import { ReactComponent as SearchIconPrimal } from "../SearchBar/img/bx_search.svg";

export const SearchBarContainer = styled.div`
  margin-left: auto;
  display: flex;
  width: 288px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 4px;
  border: 1px solid #fd5103;
`;

export const SearchBarInput = styled.input`
  height: 100%;
  padding: 0;
  margin: 0;
  outline: none;
  border: none;
  width: 100%;
  cursor: pointer;
  padding-left: 8px;
  padding-right: 8px;
  background: none;
  opacity: 0.4;
  color: #5f6775;
  &::placeholder {
    color: inherit;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 171.429% */
    letter-spacing: 0.28px;
  }
  &:hover,
  &:focus {
    opacity: 1;
    color: #fd5103;
  }
`;

export const SearchBarButton = styled.button`
  transition: 250ms;
  background: none;
  cursor: pointer;
  border-right: 1px solid #fd5103;
  fill: #fd5103;
  color: #fd5103;
  &:focus,
  &:hover {
    background: #fd5103;
    fill: #fff;
  }
`;

export const SearchIcon = styled(SearchIconPrimal)`
  pointer-events: none;
  padding: 8px;
  color: inherit;
  fill: inherit;
  * {
    color: inherit;
    fill: inherit;
  }
`;
