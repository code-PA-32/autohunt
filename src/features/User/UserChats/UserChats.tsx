import { ProfileLink } from "Components/UserComponents";
import { useUserChats } from "./useUserChats";

import "./userChats.scss";
import { Chat } from "Components/UserComponents/Chat";
export const UserChats = () => {
  const { user, chats } = useUserChats();

  return (
    <>
      <ProfileLink isAdmin={user.isAdmin} />
      <Chat chats={chats} />
    </>
  );
};
