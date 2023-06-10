import { useSelector } from "react-redux";
import { SyntheticEvent, useEffect } from "react";

import { carReviewsSelector } from "./carReviewsSelector";
import {
  setModel,
  setBrand,
  setPagination,
  getReviewCars,
} from "./carReviewsSlice";
import { useAppDispatch } from "store";
import { filterDataSelector } from "features/MainPageFilters/filtersDataSelector";


export const useCarReviews = () => {
  const { cars, model, brand, total, status, pagination } =
    useSelector(carReviewsSelector);

  const {
    filterData: { brands },
  } = useSelector(filterDataSelector);

  const brandList = (brands && Object.keys(brands)) || [];

  const models = (brand && Object.values(brands[brand])) || [];

  const dispatch = useAppDispatch();

  const onSetModel = (
    event: SyntheticEvent<Element, Event>,
    value: string | null
  ) => {
    dispatch(setModel(value));
  };

  const onSetBrand = (
    event: SyntheticEvent<Element, Event>,
    value: string | null
  ) => {
    dispatch(setModel(null));
    dispatch(setPagination(1));
    dispatch(setBrand(value));
  };

  const handleChangePagination = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    dispatch(setPagination(value));
    dispatch(getReviewCars({ brand, model, pagination }));
  };

  useEffect(() => {
    dispatch(getReviewCars({ brand, model, pagination }));
  }, [brand, model, pagination, dispatch]);

  const style = {
    margin: "50px auto",
    width: "max-content",
  };

  return {
    cars,
    model,
    models,
    brand,
    brandList,
    total: +total && Math.ceil(+total / 10),
    status,
    pagination,
    style,
    onSetBrand,
    onSetModel,
    handleChangePagination,
  };
};
