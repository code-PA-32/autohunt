import { useSelector } from "react-redux";
import { carFiltersSelector } from "./carFiltersSelector";
import { filterDataSelector } from "./filtersDataSelector";
import { useEffect } from "react";
import { useAppDispatch } from "store";
import { getFiltersData } from "./carFiltersDataSlice";
import {
  setBrand,
  setCondition,
  setLocation,
  setModel,
  setPrice,
  setTerm,
} from "./carFiltersSlice";
import { useNavigate } from "react-router-dom";

export const useCarFilters = () => {
  const { filters } = useSelector(carFiltersSelector);
  const { status, filterData } = useSelector(filterDataSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { brand, price, model, term, location, condition } = filters;

  const brands = (filterData.brands && Object.keys(filterData.brands)) || [];
  const models = (brand && Object.values(filterData.brands[brand])) || [];
  const locations =
    (filterData.locations && Object.keys(filterData.locations)) || [];

  const handleChangePrice = (event: Event, newValue: number | number[]) => {
    dispatch(setPrice(newValue));
  };

  const handleChangeBrand = (event: any, newValue: string | null) => {
    dispatch(setBrand(newValue as string));
    dispatch(setModel([]));
  };

  const handleChangeModel = (e: any, v: string[]) => {
    dispatch(setModel(v));
  };

  const handleChangeTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTerm(e.target.value));
  };

  const handleChangeLocation = (e: any, v: string[]) => {
    dispatch(setLocation(v));
  };

  const handleSetNew = () => {
    dispatch(setCondition(true));
  };
  const handleSetUsed = () => {
    dispatch(setCondition(false));
  };
  const handleSetAll = () => {
    dispatch(setCondition(""));
  };

  const handleOnSearch = () => {
    navigate("/results");
  };
  useEffect(() => {
    dispatch(getFiltersData());
  }, [dispatch]);

  return {
    brand,
    price,
    model,
    term,
    location,
    status,
    brands,
    models,
    condition,
    locations,
    handleSetNew,
    handleSetUsed,
    handleSetAll,
    handleChangePrice,
    handleChangeBrand,
    handleChangeModel,
    handleChangeTerm,
    handleChangeLocation,
    handleOnSearch,
  };
};
