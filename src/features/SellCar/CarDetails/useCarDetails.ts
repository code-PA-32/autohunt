import { useAppDispatch } from "store";
import {
  setModel,
  setBrand,
  setColor,
  setCondition,
  setDescription,
  setLabel,
  setSeats,
  setBody,
  setYear,
} from "../sellCarSlice";
import { useSelector } from "react-redux";
import { filterDataSelector } from "features/MainPageFilters/filtersDataSelector";
import { sellCarSelector } from "../sellCarSelector";
import { ChangeEvent, SyntheticEvent } from "react";

export const useCarDetails = () => {
  const dispatch = useAppDispatch();

  const { filterData } = useSelector(filterDataSelector);

  const { car } = useSelector(sellCarSelector);

  const brands = Object.keys(filterData.brands) || [];
  const models =
    (car?.details["Car Details"]?.Brand &&
      Object.values(filterData.brands[car.details["Car Details"].Brand])) ||
    [];

  const handleChangeModel = (event: any, newValue: string | null) => {
    dispatch(setModel(newValue as string));
  };

  const handleChangeBody = (event: any, newValue: string | null) => {
    dispatch(setBody(newValue as string));
  };

  const handleChangeLabel = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setLabel(e.target.value));
  };
  const handleChangeBrand = (event: any, newValue: string | null) => {
    dispatch(setBrand(newValue as string));
  };
  const handleChangeYear = (
    event: SyntheticEvent<Element, Event>,
    newValue: string | null
  ) => {
    dispatch(setYear(newValue as string));
  };

  const handleChangePass = (
    event: SyntheticEvent<Element, Event>,
    newValue: string | null
  ) => {
    dispatch(setSeats(newValue as string));
  };

  const handleChangeCondition = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    (event.target as HTMLInputElement).value === "true"
      ? dispatch(setCondition(true))
      : dispatch(setCondition(false));
  };

  const handleChangeColor = (event: any, newValue: string | null) => {
    dispatch(setColor(newValue as string));
  };

  const handleChangeDescription = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setDescription(e.target.value));
  };

  return {
    label: car.label,
    handleChangeLabel,
    handleChangeBody,
    bodies: filterData.bodyType,
    body: car.details["Car Details"]["Body Type"],
    handleChangeBrand,
    brands,
    brand: car.details["Car Details"].Brand,
    year: car.details["Car Details"].Year,
    years: filterData.years,
    handleChangeYear,
    passengers: car.details["Car Details"].Seats,
    handleChangePass,
    condition: car.condition,
    handleChangeCondition,
    models,
    model: car.details["Car Details"].Model,
    handleChangeModel,
    color: car.details["Car Details"]["Exterior Color"],
    colors: filterData.colors,
    handleChangeColor,
    description: car.description,
    handleChangeDescription,
  };
};
