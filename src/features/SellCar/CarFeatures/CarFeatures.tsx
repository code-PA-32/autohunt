import { Checkbox, FormControlLabel } from "@mui/material";

import { useCarFeatures } from "./useCarFeatures";
import { SellCarFeatures } from "types";
import { AutoCompleteSingle } from "Components/Filters/AutoCompleteSingle";
import { TextInput } from "Components/SellCar";

import "./carFeatures.scss";

export const CarFeatures = () => {
  const {
    locationsSelect,
    location,
    city,
    cities,
    price,
    Futures,
    onStateChange,
    handleChangePrice,
    handleChangeCity,
    handleChangeLocation,
  } = useCarFeatures();
  return (
    <div className="features">
      <h3>Features</h3>
      <ul className="features_list">
        {Object.keys(Futures).map((item: string) => (
          <li key={item} className="features-list-item">
            <FormControlLabel
              value={item}
              control={
                <Checkbox
                  checked={Futures[item as keyof SellCarFeatures]}
                  onChange={onStateChange}
                  inputProps={{ "aria-label": "controlled" }}
                  className="single_input"
                />
              }
              label={item}
              labelPlacement="end"
            />
          </li>
        ))}
      </ul>

      <div className="features_options">
        <AutoCompleteSingle
          id={"car_location"}
          className="car_location"
          label={"Location"}
          required
          onChange={handleChangeLocation}
          options={locationsSelect}
          value={location || null}
        />
        <AutoCompleteSingle
          id={"car_city"}
          label={"City"}
          required
          className="car_city"
          disabled={location === null}
          onChange={handleChangeCity}
          value={city || null}
          options={cities}
        />
        <TextInput
          value={price.toString()}
          className="car_price"
          id={"car_price"}
          required
          label={"Price"}
          onChange={handleChangePrice}
          max={6}
        />
      </div>
    </div>
  );
};
