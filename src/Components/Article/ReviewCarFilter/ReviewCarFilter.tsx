import { SyntheticEvent } from "react";
import "./reviewCarFilter.scss";
import { AutoCompleteSingle } from "Components/Filters/AutoCompleteSingle";

interface ReviewCarFilterProps {
  brand: string | null;
  brands: string[];
  model: string | null;
  models: string[];
  onSetModel: (
    event: SyntheticEvent<Element, Event>,
    value: string | null
  ) => void;
  onSetBrand: (
    event: SyntheticEvent<Element, Event>,
    value: string | null
  ) => void;
}

export const ReviewCarFilter = ({
  brand,
  brands,
  onSetBrand,
  model,
  models,
  onSetModel,
}: ReviewCarFilterProps) => {
  return (
    <div className="car_review_filter">
      <AutoCompleteSingle
        id={"car_brand"}
        className="car_brand"
        label={"Brand"}
        onChange={onSetBrand}
        options={brands}
        value={brand}
      />
      <AutoCompleteSingle
        id={"car_model"}
        label={"Model"}
        value={model}
        disabled={brand === null}
        onChange={onSetModel}
        className="car_model"
        options={models}
      />
    </div>
  );
};
