import { RootState } from "store";

export const carReviewsSelector = (state: RootState) => ({
  cars: state.reviewCars.cars,
  brand: state.reviewCars.brand,
  model: state.reviewCars.model,
  status: state.reviewCars.status,
  pagination: state.reviewCars.pagination,
  total: state.reviewCars.total,
});
