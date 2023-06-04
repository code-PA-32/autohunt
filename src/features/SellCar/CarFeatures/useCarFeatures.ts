import { useSelector } from "react-redux";
import { useAppDispatch } from "store";
import { sellCarSelector } from "../sellCarSelector";
import { filterDataSelector } from "features/MainPageFilters/filtersDataSelector";
import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import { setCity, setFeatures, setLocation, setPrice } from "../sellCarSlice";
import { SellCarFeatures } from "../../../types/sellCar";
export const useCarFeatures = () => {
  const dispatch = useAppDispatch();
  const {
    price,
    details: { Futures },
    location,
  } = useSelector(sellCarSelector).car;
  const { locations } = useSelector(filterDataSelector).filterData;

  const [featuresLocal, setFeaturesLocal] = useState<SellCarFeatures>(Futures);

  const onStateChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFeaturesLocal((prevState) => ({
      ...prevState,
      [e.target.value]: e.target.checked,
    }));
  };

  useEffect(() => {
    dispatch(setFeatures(featuresLocal));
  }, [featuresLocal, dispatch]);

  const locationsSelect = Object.keys(locations) || [];
  const cities = (location && locations[location.state]) || [];

  const handleChangeLocation = (
    event: SyntheticEvent<Element, Event>,
    value: string | null
  ) => {
    dispatch(setLocation(value as string));
  };
  const handleChangeCity = (
    event: SyntheticEvent<Element, Event>,
    value: string | null
  ) => {
    dispatch(setCity(value as string));
  };
  const handleChangePrice = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setPrice(e.target.value));
  };
  return {
    locationsSelect,
    location: location.state,
    city: location.city,
    cities,
    price,
    Futures,
    onStateChange,
    handleChangePrice,
    handleChangeCity,
    handleChangeLocation,
  };
};
