import { RootState } from "store";

export const mainPageAutohuntReviewSelector = (state: RootState) => ({
  cars: state.mainReviews.cars,
  status: state.mainReviews.status,
});
