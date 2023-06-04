import { UserChats } from "features/User/UserChats/UserChats";
import "./userChatsPage.scss";
import { Container } from "Components/Container";
export const UserChatsPage = () => {
  return (
    <Container className="chats">
      <UserChats />
    </Container>
  );
};
