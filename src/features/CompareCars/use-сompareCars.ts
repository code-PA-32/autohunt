import { useEffect } from "react";
import { getCompareCars } from "./compareCarsSlice";
import { Status, CardCars } from "types";
import { useAppDispatch } from "store";
import { useSelector } from "react-redux";
import { compareCarsSelector } from "./compareCarsSelector";

export const useCompare = (): {
  status: Status;
  list: string[];
  cars: CardCars[];
} => {
  const dispatch = useAppDispatch();
  const { list, status, cars } = useSelector(compareCarsSelector);

  useEffect(() => {
    if (cars.length === 0) {
      dispatch(getCompareCars());
    }
    return;
  }, [dispatch]);

  return {
    list,
    status,
    cars,
  };
};
