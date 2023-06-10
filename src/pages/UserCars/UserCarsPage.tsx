import { Container } from "Components/Container";
import { UserCars } from "features/User/UserCars/UserCars";

import "./userCarsPage.scss";

export const UserCarsPage = () => {
  return (
    <Container className="user_cars">
      <UserCars />
    </Container>
  );
};
