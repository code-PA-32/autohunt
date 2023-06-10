import { Container } from "Components/Container";
import { AutohuntReviews } from "features/AutohuntReviews";

import "./autohuntReviewsPage.scss";

export const AutohuntReviewsPage = () => {
  return (
    <Container className="autohunt_reviews">
      <AutohuntReviews />
    </Container>
  );
};
