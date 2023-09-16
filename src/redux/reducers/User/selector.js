import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.user
);

export const selectMessage = createSelector(
  [selectUser],
  ({ message }) => message
);
