import { useState } from "react";
import { getAuth, getOut } from "./helpers/api";
import { AuthButton } from "./Auth.styled";

export const Auth = () => {
  const [auth, setAuth] = useState(false);

  function authorization() {
    if (!auth) {
      getAuth();
      setAuth(true);
    } else {
      getOut();
      setAuth(false);
    }
  }

  return (
    <AuthButton onClick={authorization}>{!auth ? "AUTH" : "OUT"}</AuthButton>
  );
};
