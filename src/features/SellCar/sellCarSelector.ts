import { RootState } from "store";

export const sellCarSelector = (state: RootState) => ({
  car: state.sellCar,
});
