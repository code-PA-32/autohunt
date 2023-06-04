import { RootState } from "store";

export const carReviewDetailsSelector = (state: RootState) => ({
  car: state.carReviewDetails.car,
  status: state.carReviewDetails.status,
});
