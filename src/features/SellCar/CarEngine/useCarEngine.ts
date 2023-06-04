import { filterDataSelector } from "features/MainPageFilters/filtersDataSelector";
import { useSelector } from "react-redux";
import { useAppDispatch } from "store";
import { sellCarSelector } from "../sellCarSelector";
import {
  setDriveUnit,
  setEngine,
  setTransmission,
  setMiles,
  setEngineCapacity,
  setEnginePower,
} from "../sellCarSlice";

export const useCarEngine = () => {
  const dispatch = useAppDispatch();
  const { filterData } = useSelector(filterDataSelector);
  const { car } = useSelector(sellCarSelector);

  const handleChangeEngine = (e: any, v: string | null) => {
    dispatch(setEngine(v as string));
  };
  const handleChangeDrive = (e: any, v: string | null) => {
    dispatch(setDriveUnit(v as string));
  };
  const handleChangeTransmission = (e: any, v: string | null) => {
    dispatch(setTransmission(v as string));
  };
  const handleChangeMiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setMiles(event.target.value));
  };
  const handleChangeCapacity = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEngineCapacity(event.target.value));
  };
  const handleChangePower = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEnginePower(event.target.value));
  };
  return {
    engine: car.details.Engine["Fuel Type"],
    engines: filterData.fuelType,
    driveUnit: car.details.Engine.Drivetrain,
    driveUnits: filterData.drive,
    miles: car.details.Engine.Mileage.slice(0, -3),
    engCapacity: car.details.Engine["Engine Capacity"].slice(0, -3),
    transmission: car.details.Engine.Transmission,
    transmissions: filterData.transmission,
    power: car.details.Engine.Power.slice(0, -3),
    handleChangeEngine,
    handleChangeDrive,
    handleChangePower,
    handleChangeMiles,
    handleChangeCapacity,
    handleChangeTransmission,
  };
};
