import { ProfileLink, UserInfo } from "Components/UserComponents";
import { useUserChats } from "./useUserChats";

import "./userChats.scss";
import { Chat } from "Components/UserComponents/Chat";
export const UserChats = () => {
  const { user, chats, status, text, handleSetText } = useUserChats();

  return (
    <>
      <ProfileLink isAdmin={user.isAdmin} />
      <Chat chats={chats} />
    </>
  );
};
