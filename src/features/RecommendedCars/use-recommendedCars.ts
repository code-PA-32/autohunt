import { useSelector } from "react-redux";
import { useEffect } from "react";

import {
  fetchNewRecommendedCars,
  fetchUsedRecommendedCars,
} from "./recommendedCarsSlice";
import { recommendedCars } from "./recommendedCarsSelector";
import { useAppDispatch } from "store";
import { Status, CardCars } from "types";

export const useRecommendedCars = (): {
  status: Status;
  newRecommended: CardCars[];
  usedRecommended: CardCars[];
} => {
  const dispatch = useAppDispatch();
  const recommended = useSelector(recommendedCars);

  useEffect(() => {
    if (
      recommended.newRecommended.length === 0 &&
      recommended.usedRecommended.length === 0
    ) {
      dispatch(fetchNewRecommendedCars());
      dispatch(fetchUsedRecommendedCars());
    }
  }, [dispatch]);

  return recommended;
};
