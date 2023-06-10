import { Container } from "Components/Container";
import { UserProfile } from "features/User";

import "./user.scss";

export const UserPage = () => {
  return (
    <Container className="user">
      <UserProfile />
    </Container>
  );
};
