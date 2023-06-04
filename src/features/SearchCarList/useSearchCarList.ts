import { useSelector } from "react-redux";
import { searchCarListSelectors } from "./searchCarListSelectors";
import { useAppDispatch } from "store";
import { useEffect } from "react";
import { getCarList } from "./searchCarListSlice";
import { carFiltersSelector } from "features/MainPageFilters/carFiltersSelector";
import { compareCarsSelector } from "features/CompareCars/compareCarsSelector";
import {
  addCompareCar,
  deleteCompareCar,
} from "features/CompareCars/compareCarsSlice";
import { currentUserSelector } from "features/User/Login/loginUserSelectors";
import { url } from "utils/url";

export const useSearchCarList = () => {
  const { status, carList } = useSelector(searchCarListSelectors);
  const { filters } = useSelector(carFiltersSelector);
  const dispatch = useAppDispatch();
  const { list } = useSelector(compareCarsSelector);
  const { message } = useSelector(currentUserSelector);

  useEffect(() => {
    dispatch(getCarList(url(filters)));
  }, [dispatch, JSON.stringify(filters)]);

  const isInCompare = (id: string): boolean => {
    return list.some((car) => car === id);
  };

  const handleAddCompare = (id: string): void => {
    dispatch(addCompareCar(id));
  };
  const handleDeleteCompare = (id: string): void => {
    dispatch(deleteCompareCar(id));
  };

  return {
    status,
    carList,
    view: filters.view,
    isInCompare,
    handleAddCompare,
    handleDeleteCompare,
    message,
  };
};
