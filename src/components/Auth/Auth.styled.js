import styled from "styled-components";
import { ReactComponent as EnterIconPrimal } from "./img/enter.svg";
import { ReactComponent as ExitIconPrimal } from "./img/exit.svg";
import { ReactComponent as GoogleAuthPrimal } from "./img/googleAuth.svg";

export const GoogleAuth = styled(GoogleAuthPrimal)`
  transition: 250ms;
  opacity: 0.7;
  * {
    fill: ${(props) => !props.$active && "grey"};
  }
  &:hover,
  &:focus {
    opacity: 1;
  }
  width: 20px;
  height: 20px;
`;

export const AuthButton = styled.button`
  cursor: pointer;
  align-self: center;
  transition: 250ms;
  margin-left: auto;
  background: none;
  margin-right: 10px;
  fill: #5f6775;
  &:hover,
  &:focus {
    fill: #fd5103;
  }
`;
