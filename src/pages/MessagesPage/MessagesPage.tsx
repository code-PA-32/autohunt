import { Container } from "Components/Container";
import { MessagesBox } from "features/User/UserChats/Messages";

export const MessagesPage = () => {
  return (
    <Container className="messages_page">
      <MessagesBox />
    </Container>
  );
};
