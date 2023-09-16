import UserActionTypes from "./types";

export const setUserMessage = (message) => ({
  type: UserActionTypes.SET_USER_MESSAGE,
  payload: message,
});

export const setCurrentUser = ({ token, role }) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: { token, role },
});

export const validateToken = () => ({
  type: UserActionTypes.VALIDATE_TOKEN,
});

export const userSignOut = () => ({
  type: UserActionTypes.SIGN_OUT,
});
