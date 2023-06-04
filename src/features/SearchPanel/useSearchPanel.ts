import { carFiltersSelector } from "features/MainPageFilters/carFiltersSelector";
import {
  setBody,
  setBrand,
  setColor,
  setDriveTrain,
  setModel,
  setPass,
  setPrice,
  setTransmission,
  setYear,
  setLocation,
  setFuel,
  setCondition,
} from "features/MainPageFilters/carFiltersSlice";
import { filterDataSelector } from "features/MainPageFilters/filtersDataSelector";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useAppDispatch } from "store";

export const useSearchPanel = () => {
  const dispatch = useAppDispatch();
  const locationFilter = useLocation().pathname;
  const { filters } = useSelector(carFiltersSelector);
  const { filterData, status } = useSelector(filterDataSelector);
  const {
    brand,
    price,
    model,
    location,
    condition,
    year,
    fuelType,
    color,
    driveTrain,
    passengers,
    transmission,
    bodyType,
  } = filters;


  const brands = Object.keys(filterData.brands) || [];
  const models = (brand && Object.values(filterData.brands[brand])) || [];
  const locations = Object.keys(filterData.locations) || [];

  const [localPrice, setLocalPrice] = useState(price);
  const handleLocalPrice = (_: any, newValue: number | number[]) => {
    setLocalPrice(newValue);
  };

  const handleChangePrice = (
    _: React.SyntheticEvent | Event,
    value: number | Array<number>
  ) => {
    dispatch(setPrice(localPrice));
  };

  const handleChangeBrand = (_: any, newValue: string | null) => {
    dispatch(setBrand(newValue as string));
    dispatch(setModel([]));
  };

  const handleChangeModel = (_: any, v: string[]) => {
    dispatch(setModel(v));
  };

  const handleChangeBody = (_: any, v: string[]) => {
    dispatch(setBody(v));
  };
  const handleChangeColor = (_: any, v: string[]) => {
    dispatch(setColor(v));
  };
  const handleChangeDriveTrain = (_: any, v: string[]) => {
    dispatch(setDriveTrain(v));
  };
  const handleChangePass = (_: any, v: string[]) => {
    dispatch(setPass(v));
  };
  const handleChangeTransmission = (_: any, v: string[]) => {
    dispatch(setTransmission(v));
  };
  const handleChangeLocation = (_: any, v: string[]) => {
    dispatch(setLocation(v));
  };
  const handleChangeYear = (_: any, v: string[]) => {
    dispatch(setYear(v));
  };
  const handleChangeFuel = (_: any, v: string[]) => {
    dispatch(setFuel(v));
  };
  const handleChangeCondition = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    (event.target as HTMLInputElement).value === ""
      ? dispatch(setCondition(""))
      : (event.target as HTMLInputElement).value === "true"
      ? dispatch(setCondition(true))
      : dispatch(setCondition(false));
  };
  return {
    brands,
    models,
    locations,
    colors: filterData.colors,
    bodys: filterData.bodyType,
    years: filterData.years,
    transmissions: filterData.transmission,
    fuels: filterData.fuelType,
    driveTrains: filterData.drive,
    status,
    brand,
    model,
    location,
    condition,
    year,
    fuelType,
    color,
    driveTrain,
    passengers,
    transmission,
    bodyType,
    localPrice,
    locationFilter,
    handleChangePrice,
    handleChangeBrand,
    handleChangeModel,
    handleChangeBody,
    handleChangeColor,
    handleChangeDriveTrain,
    handleChangePass,
    handleChangeTransmission,
    handleChangeLocation,
    handleChangeYear,
    handleLocalPrice,
    handleChangeFuel,
    handleChangeCondition,
  };
};
