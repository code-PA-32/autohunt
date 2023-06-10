import { CarDetails } from "./CarDetails";
import { CarDimension } from "./CarDimension";
import { CarEngine } from "./CarEngine";
import { CarFeatures } from "./CarFeatures";
import { CarPicture } from "./CarPictures";
import { useSellCar } from "./useSellCar";
import { CarBattery } from "./Battery/Battery";

import "./sellCar.scss";

export const SellCar = () => {
  const { onCarSell, logged } = useSellCar();

  return (
    <form
      className="sellCar"
      onSubmit={onCarSell}
      encType="multipart/form-data"
    >
      <CarDetails />
      <CarEngine />
      <CarBattery />
      <CarDimension />
      <CarFeatures />
      <CarPicture />
      <button className="sell_car_button" type="submit" disabled={!logged}>
        Sell my Car
      </button>
    </form>
  );
};
