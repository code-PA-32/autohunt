import { useSelector } from "react-redux";
import { useAppDispatch } from "store";
import { autohuntReviewsSelector } from "./autohuntReviewsSelector";
import { useEffect } from "react";
import { getAutohuntReviews } from "./autohuntReviewsSlice";

export const useAutohuntReviews = () => {
  const dispatch = useAppDispatch();
  const { cars, status } = useSelector(autohuntReviewsSelector);

  useEffect(() => {
    dispatch(getAutohuntReviews());
  }, []);

  return { cars, status };
};
