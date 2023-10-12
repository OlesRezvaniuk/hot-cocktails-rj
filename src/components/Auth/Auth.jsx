import { useDispatch, useSelector } from "react-redux";
import { AuthButton } from "./Auth.styled";
import { GoogleAuth } from "./Auth.styled";
import { getAuth } from "../../redux/auth/authOperations";
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
