import {
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Slider,
} from "@mui/material";
import { AutoCompleteSelect } from "Components/Filters";
import { AutoCompleteSingle } from "Components/Filters/AutoCompleteSingle";
import { useSearchPanel } from "./useSearchPanel";

import "./searchPanel.scss";

export const SearchPanel = () => {
  const {
    brand,
    bodyType,
    bodys,
    brands,
    handleChangeBody,
    handleChangeBrand,
    color,
    colors,
    condition,
    handleChangeColor,
    handleChangeDriveTrain,
    handleChangeFuel,
    handleChangeLocation,
    handleChangeModel,
    handleChangePass,
    handleChangePrice,
    handleChangeTransmission,
    handleChangeYear,
    handleLocalPrice,
    driveTrain,
    driveTrains,
    location,
    locations,
    model,
    models,
    year,
    years,
    transmission,
    transmissions,
    fuelType,
    passengers,
    localPrice,
    fuels,
    locationFilter,
    status,
    handleChangeCondition,
  } = useSearchPanel();

  return (
    <div className="filters">
      <h2>Filters</h2>

      {locationFilter === "/search-results" && (
        <div className="condition_select">
          <FormLabel id="condition">Condition</FormLabel>
          <RadioGroup
            value={condition}
            className="filter_condition"
            row
            onChange={handleChangeCondition}
          >
            <FormControlLabel value={""} control={<Radio />} label="All" />
            <FormControlLabel value={true} control={<Radio />} label="New" />
            <FormControlLabel value={false} control={<Radio />} label="Used" />
          </RadioGroup>
        </div>
      )}

      <AutoCompleteSingle
        id="brand"
        label="Brand"
        onChange={handleChangeBrand}
        value={brand as string}
        options={brands}
      />
      <AutoCompleteSelect
        options={models}
        value={model}
        disabled={brand as string}
        id="model"
        label="Model"
        onChange={handleChangeModel}
      />
      <AutoCompleteSelect
        options={years}
        value={year}
        id="year"
        label="Year"
        onChange={handleChangeYear}
      />
      <AutoCompleteSelect
        options={bodys}
        value={bodyType}
        id="body"
        label="Body Type"
        onChange={handleChangeBody}
      />
      <AutoCompleteSelect
        options={transmissions}
        value={transmission}
        id="transmission"
        label="Transmission"
        onChange={handleChangeTransmission}
      />
      <AutoCompleteSelect
        options={fuels}
        value={fuelType}
        id="fuel"
        label="Fuel Type"
        onChange={handleChangeFuel}
      />
      <AutoCompleteSelect
        options={driveTrains}
        value={driveTrain}
        id="drive"
        label="Drivetrain"
        onChange={handleChangeDriveTrain}
      />
      <AutoCompleteSelect
        options={["2", "3", "4", "5", "6", "7"]}
        value={passengers}
        id="pass"
        label="Passengers"
        onChange={handleChangePass}
      />
      <AutoCompleteSelect
        options={colors}
        value={color}
        id="color"
        label="Color"
        onChange={handleChangeColor}
      />
      <AutoCompleteSelect
        options={locations}
        value={location}
        id="location"
        label="Location"
        onChange={handleChangeLocation}
      />
      <div className="number_price">
        <span>Price Range</span>
        {Array.isArray(localPrice) && (
          <div className="price">
            <span>$ {localPrice[0]}</span> - <span>$ {localPrice[1]}</span>
          </div>
        )}
      </div>
      <Slider
        value={localPrice}
        className="price_slider"
        min={0}
        max={300000}
        onChange={handleLocalPrice}
        onChangeCommitted={handleChangePrice}
        valueLabelDisplay="auto"
      />
    </div>
  );
};
