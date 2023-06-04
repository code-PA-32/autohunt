import { Container } from "Components/Container";
import "./userCarsPage.scss";
import { UserCars } from "features/User/UserCars/UserCars";

export const UserCarsPage = () => {
  return (
    <Container className="user_cars">
      <UserCars />
    </Container>
  );
};
