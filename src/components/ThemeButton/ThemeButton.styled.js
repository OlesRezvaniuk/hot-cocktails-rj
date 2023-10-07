import styled from "styled-components";

export const ThemeButtonBox = styled.div`
  display: flex;
`;

export const BollButton = styled.button`
  width: 40px;
  height: 20px;
  border-radius: 10px;
  cursor: pointer;
  margin: 0px 12px;
  display: flex;
  background: none;
  outline: 1px solid #fd5103;
  position: relative;
`;

export const Boll = styled.div`
  position: absolute;
  margin-left: initial;
  transition: 250ms;
  height: 18px;
  width: 18px;
  background: #fd5103;
  align-self: center;
  border-radius: 50%;
  pointer-events: none;
  scale: 1;
  left: ${(props) => (props.$active ? "21px" : "1px;")};
`;

export const ThemeButtonText = styled.span`
  pointer-events: none;
  color: ${(props) => (props.$active ? "#fd5103" : "#5F6775")};
`;
