import { RootState } from "store";

export const autohuntReviewsSelector = (state: RootState) => ({
  cars: state.autohuntReviews.cars,
  status: state.autohuntReviews.status,
});
