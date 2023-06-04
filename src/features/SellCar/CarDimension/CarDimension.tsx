import { TextInput } from "Components/SellCar";
import { useCarDimension } from "./useCarDimension";
import "./carDimension.scss";

export const CarDimension = () => {
  const {
    Length,
    Width,
    Height,
    cargo,
    handleChangeLength,
    handleChangeWidth,
    handleChangeHeight,
    handleChangeCargo,
  } = useCarDimension();
  return (
    <div className="dimension">
      <h3>Dimension</h3>
      <TextInput
        value={Length.slice(0, -3)}
        onChange={handleChangeLength}
        id="car_length"
        max={4}
        required
        type="number"
        className="car_length"
        label="Length (mm)"
      />
      <TextInput
        value={Width.slice(0, -3)}
        onChange={handleChangeWidth}
        id="car_width"
        required
        max={4}
        type="number"
        className="car_width"
        label="Width (mm)"
      />
      <TextInput
        value={Height.slice(0, -3)}
        onChange={handleChangeHeight}
        id="car_height"
        max={4}
        required
        type="number"
        className="car_height"
        label="Height (mm)"
      />
      <TextInput
        value={cargo.slice(0, -2)}
        onChange={handleChangeCargo}
        id="car_volume"
        max={4}
        required
        type="number"
        className="car_volume"
        label="Cargo Volume (l)"
      />
    </div>
  );
};
