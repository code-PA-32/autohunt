import { UserChats } from "features/User/UserChats/UserChats";
import { Container } from "Components/Container";

import "./userChatsPage.scss";

export const UserChatsPage = () => {
  return (
    <Container className="chats">
      <UserChats />
    </Container>
  );
};
