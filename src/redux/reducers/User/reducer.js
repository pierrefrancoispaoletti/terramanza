import UserActionTypes from "./types";

const INITIAL_STATE = {
  user: undefined,
  message: "",
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload,
      };
    case UserActionTypes.SET_USER_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };
    case UserActionTypes.SIGN_OUT:
      return {
        ...state,
        user: undefined,
      };
    default:
      return state;
  }
};
