import { FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { AutoCompleteSingle } from "Components/Filters/AutoCompleteSingle";
import { TextInput } from "Components/SellCar";
import { useCarDetails } from "./useCarDetails";
import "./carDetails.scss";

export const CarDetails = () => {
  const {
    label,
    handleChangeLabel,
    bodies,
    body,
    handleChangeBody,
    brand,
    brands,
    handleChangeBrand,
    year,
    years,
    handleChangeYear,
    passengers,
    handleChangePass,
    condition,
    handleChangeCondition,
    model,
    models,
    handleChangeModel,
    color,
    colors,
    handleChangeColor,
    handleChangeDescription,
    description,
  } = useCarDetails();

  return (
    <div className="car_details">
      <h3>Car Details</h3>
      <TextInput
        value={label}
        onChange={handleChangeLabel}
        id="car_label"
        max={10}
        className="car_label"
        required
        label="Title (limit is 10 characters)"
      />
      <AutoCompleteSingle
        options={bodies}
        value={body || null}
        id="body_select"
        label="Body Type"
        required
        onChange={handleChangeBody}
        className="body_select"
      />
      <AutoCompleteSingle
        options={brands}
        value={brand || null}
        id="brand_select"
        label="Brand"
        required
        onChange={handleChangeBrand}
        className="brand_select"
      />
      <AutoCompleteSingle
        options={years}
        value={year || null}
        id="year_select"
        required
        label="Year"
        onChange={handleChangeYear}
        className="year_select"
      />
      <AutoCompleteSingle
        options={["2", "3", "4", "5", "6", "7"]}
        id="pax_select"
        required
        value={passengers || null}
        label="Passenger Capacity"
        onChange={handleChangePass}
        className="pass_select"
      />

      <div className="condition-select">
        <FormLabel id="condition">Condition</FormLabel>
        <RadioGroup value={condition} onChange={handleChangeCondition} row>
          <FormControlLabel value={true} control={<Radio />} label="New" />
          <FormControlLabel value={false} control={<Radio />} label="Used" />
        </RadioGroup>
      </div>

      <AutoCompleteSingle
        options={models}
        value={model || null}
        id="model_select"
        required
        disabled={brand === null}
        label="Model"
        onChange={handleChangeModel}
        className="model_select"
      />
      <AutoCompleteSingle
        options={colors}
        value={color || null}
        required
        id="color_select"
        label="Color"
        onChange={handleChangeColor}
        className="color_select"
      />

      <TextInput
        value={description}
        onChange={handleChangeDescription}
        id="car_description"
        rows={5}
        required
        multiline
        max={500}
        className="car_description"
        label="Write description about your car"
      />
    </div>
  );
};
