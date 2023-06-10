import { Container } from "Components/Container";
import { CarReviews } from "features/CarReviews";

import "./carReviewsPage.scss";

export const CarReviewsPage = () => {
  return (
    <Container className="car_reviews">
      <CarReviews />
    </Container>
  );
};
