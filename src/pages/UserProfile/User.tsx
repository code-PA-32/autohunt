import { Container } from "Components/Container";
import "./user.scss";
import { UserProfile } from "features/User";

export const UserPage = () => {
  return (
    <Container className="user">
      <UserProfile />
    </Container>
  );
};
