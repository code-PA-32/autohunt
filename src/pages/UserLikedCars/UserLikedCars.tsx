import { Container } from "Components/Container";
import "./userLikedCars.scss";
import { UserLikedCars } from "features/User";

export const UserLikedCarsPage = () => {
  return (
    <Container className="user_liked_cars">
      <UserLikedCars />
    </Container>
  );
};
