import { RootState } from "store";

export const userCarsSelector = (state: RootState) => ({
  likedCars: state.userCars.userLikedCars,
  sellCars: state.userCars.userCars,
  status: state.userCars.status,
});
