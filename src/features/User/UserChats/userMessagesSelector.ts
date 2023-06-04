import { RootState } from "store";

export const userMessagesSelector = (state: RootState) => ({
  messages: state.userMessages.messages,
  status: state.userMessages.status,
});
