import { filterDataSelector } from "features/MainPageFilters/filtersDataSelector";
import { useSelector } from "react-redux";
import { useAppDispatch } from "store";
import { sellCarSelector } from "../sellCarSelector";
import { setBatteryCap, setChargeTime, setChargeType } from "../sellCarSlice";
import { useEffect, useState } from "react";

export const useBattery = () => {
  const dispatch = useAppDispatch();
  const { filterData } = useSelector(filterDataSelector);
  const { car } = useSelector(sellCarSelector);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    setFlag(car.details.Engine["Fuel Type"] === "Electric" ? true : false);
  }, [car.details.Engine["Fuel Type"]]);

  const handleChangeBatteryCap = (event: any, newValue: string | null) => {
    dispatch(setBatteryCap(newValue as string));
  };
  const handleChangeChargeTime = (event: any, newValue: string | null) => {
    dispatch(setChargeTime(newValue as string));
  };
  const handleChangeChargeType = (event: any, newValue: string | null) => {
    dispatch(setChargeType(newValue as string));
  };

  return {
    battery: car.details["Battery and Charging"]["Battery Capacity"],
    batteries: filterData.batteryCapacity,
    chargeType: car.details["Battery and Charging"]["Charge Port"],
    chargeTypes: filterData.chargingType,
    chargeTime: car.details["Battery and Charging"]["Charge Time (0->Full)"],
    chargeTimes: filterData.chargingTime,
    handleChangeBatteryCap,
    handleChangeChargeTime,
    handleChangeChargeType,
    flag,
  };
};
