import styled from "styled-components";
import { ReactComponent as EnterIconPrimal } from "./img/enter.svg";
import { ReactComponent as ExitIconPrimal } from "./img/exit.svg";

export const AuthButton = styled.button`
  align-self: end;
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

export const EnterIcon = styled(EnterIconPrimal)`
  cursor: pointer;
  width: 24px;
  padding: 0px 3px;
  fill: inherit;
  * {
      fill: inherit;
    }
  }
`;
export const ExitIcon = styled(ExitIconPrimal)`
  cursor: pointer;
  width: 24px;
  padding: 0px 3px;
  fill: inherit;
  * {
    fill: inherit;
  }
`;
