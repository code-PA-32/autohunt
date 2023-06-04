import { RootState } from "store";

export const currentUserSelector = (state: RootState) => ({
  user: state.currentUser.user,
  status: state.currentUser.status,
  logged: state.currentUser.isLoggedIn,
  message: state.currentUser.message,
});
