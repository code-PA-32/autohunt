import { CardCars } from "./cars";
import { Status } from "./status";

export type RecommendedCarsSlice = {
  status: Status;
  newRecommended: CardCars[];
  usedRecommended: CardCars[];
};
