import { carFiltersSelector } from "features/MainPageFilters/carFiltersSelector";
import { SelectChangeEvent } from "@mui/material";
import { useSelector } from "react-redux";

import { searchCarListSelectors } from "features/SearchCarList/searchCarListSelectors";
import { useAppDispatch } from "store";
import {
  setSort,
  setView,
  setTerm,
} from "features/MainPageFilters/carFiltersSlice";

export const useViewPanel = () => {
  const dispatch = useAppDispatch();
  const { sort, view, term } = useSelector(carFiltersSelector).filters;
  const { total } = useSelector(searchCarListSelectors);

  const handleChangeTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTerm(e.target.value));
  };

  const handleSortChange = (event: SelectChangeEvent<string>) => {
    dispatch(setSort(event.target.value));
  };
  const handleChangeView = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(setView(e.currentTarget.name));
  };

  return {
    sort,
    view,
    term,
    total,
    handleChangeTerm,
    handleChangeView,
    handleSortChange,
  };
};
