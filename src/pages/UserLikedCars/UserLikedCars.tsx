import { Container } from "Components/Container";
import { UserLikedCars } from "features/User";

import "./userLikedCars.scss";

export const UserLikedCarsPage = () => {
  return (
    <Container className="user_liked_cars">
      <UserLikedCars />
    </Container>
  );
};
