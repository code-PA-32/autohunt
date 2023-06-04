import { carFiltersSelector } from "features/MainPageFilters/carFiltersSelector";
import { searchCarListSelectors } from "features/SearchCarList/searchCarListSelectors";
import { useSelector } from "react-redux";
import { useAppDispatch } from "store";
import { setPagination } from "features/MainPageFilters/carFiltersSlice";

export const usePagination = () => {
  const dispatch = useAppDispatch();
  const { pagination } = useSelector(carFiltersSelector).filters;
  const { total } = useSelector(searchCarListSelectors);

  const totalPages = +total && Math.ceil(+total / 10);
  const currentPage = pagination;
  const handleChangePagination = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    dispatch(setPagination(value));
  };
  return {
    totalPages,
    currentPage,
    handleChangePagination,
  };
};
