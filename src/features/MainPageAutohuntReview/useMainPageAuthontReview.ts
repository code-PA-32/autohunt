import { useSelector } from "react-redux";
import { useAppDispatch } from "store";
import { mainPageAutohuntReviewSelector } from "./mainPageAutohuntReviewSelector";
import { useEffect } from "react";
import { getAutohuntReviewsCar } from "./mainPageAutohuntReviewSlice";

export const useMainPageAutohuntReview = () => {
  const dispatch = useAppDispatch();
  const { cars, status } = useSelector(mainPageAutohuntReviewSelector);

  useEffect(() => {
    if (cars.length === 0) {
      dispatch(getAutohuntReviewsCar());
    }
  }, []);

  return { cars, status };
};
