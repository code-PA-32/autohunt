import { RootState } from "store";

export const userChatSelector = (state: RootState) => ({
  status: state.userChats.status,
  chats: state.userChats.chats,
  length: state.userChats.unreadMessages
});
