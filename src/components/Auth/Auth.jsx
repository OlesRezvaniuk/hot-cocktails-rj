import { useDispatch } from "react-redux";
import { useState } from "react";
// import { getAuth, getOut } from "./helpers/api";
import { AuthButton } from "./Auth.styled";
import { EnterIcon, ExitIcon } from "./Auth.styled";
import { getAuth } from "../../redux/auth/authOperations";

export const Auth = () => {
  const [auth, setAuth] = useState(false);
  const dispatch = useDispatch();
  // function authorization() {
  //   if (!auth) {
  //     getAuth();
  //     setAuth(true);
  //   } else {
  //     getOut();
  //     setAuth(false);
  //   }
  // }

  return (
    <AuthButton
      onClick={() => {
        dispatch(getAuth());
      }}
    >
      {auth ? <ExitIcon /> : <EnterIcon />}
    </AuthButton>
  );
};
