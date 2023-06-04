import { Container } from "Components/Container";
import "./carReviewsPage.scss";
import { CarReviews } from "features/CarReviews";


export const CarReviewsPage = () => {
  return (
    <Container className="car_reviews">
      <CarReviews />
    </Container>
  );
};
