import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { LoginButtonStyled } from "./login-button.style";
import { selectCurrentUser } from "../../redux/reducers/User/selector";
import { useDispatch, useSelector } from "react-redux";
import { setUserMessage, userSignOut } from "../../redux/reducers/User/actions";
import { faDoorOpen, faUser } from "@fortawesome/free-solid-svg-icons";

const Loginbutton = () => {
  const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  return !user ? (
    <LoginButtonStyled to="/connexion">
      <FontAwesomeIcon icon={faUser} size="3x" />
    </LoginButtonStyled>
  ) : (
    <LoginButtonStyled
      to="/"
      onClick={() => {
        dispatch(userSignOut());
        dispatch(setUserMessage("Déconnécté"));
      }}
    >
      <FontAwesomeIcon icon={faDoorOpen} size="3x" />
    </LoginButtonStyled>
  );
};

export default Loginbutton;
