import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
// import { getAuth, getOut } from "./helpers/api";
import { AuthButton } from "./Auth.styled";
import { EnterIcon, ExitIcon, GoogleAuth } from "./Auth.styled";
import { getAuth } from "../../redux/auth/authOperations";
import { authSelector } from "../../redux/auth/authSelector";
import { tokenSelector } from "../../redux/auth/authSelector";
import { singOut } from "../../redux/auth/authOperations";

export const Auth = () => {
  const dispatch = useDispatch();

  const token = useSelector(tokenSelector);

  return (
    <AuthButton
      onClick={() => {
        if (token === null) {
          dispatch(getAuth());
        } else {
          dispatch(singOut());
        }
      }}
    >
      <GoogleAuth $active={token} />
    </AuthButton>
  );
};
