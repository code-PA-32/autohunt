import { FilterSlice } from "types";
const encodeQueryString = (params: { [key: string]: any }): string => {
  const query = Object.keys(params)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
    )
    .join("&");
  return query;
};

export const url = (filters: FilterSlice): string => {
  const queryParams: { [key: string]: any } = {};

  if (filters.term && filters.term.trim() !== "") {
    queryParams.term = filters.term.trim();
  }

  if (filters.condition !== undefined && filters.condition !== "") {
    queryParams.condition = filters.condition;
  }

  if (
    filters.brand &&
    typeof filters.brand === "string" &&
    filters.brand.trim() !== ""
  ) {
    queryParams.brand = filters.brand.trim();
  }

  if (Array.isArray(filters.model) && filters.model.length > 0) {
    queryParams.model = filters.model.join(",");
  }

  if (Array.isArray(filters.price) && filters.price.length === 2) {
    queryParams.price = filters.price.join(",");
  }

  if (Array.isArray(filters.year) && filters.year.length > 0) {
    queryParams.year = filters.year.join(",");
  }

  if (Array.isArray(filters.bodyType) && filters.bodyType.length > 0) {
    queryParams.bodyType = filters.bodyType.join(",");
  }

  if (Array.isArray(filters.transmission) && filters.transmission.length > 0) {
    queryParams.transmission = filters.transmission.join(",");
  }

  if (Array.isArray(filters.fuelType) && filters.fuelType.length > 0) {
    queryParams.fuelType = filters.fuelType.join(",");
  }

  if (Array.isArray(filters.passengers) && filters.passengers.length > 0) {
    queryParams.passengers = filters.passengers.join(",");
  }

  if (Array.isArray(filters.color) && filters.color.length > 0) {
    queryParams.color = filters.color.join(",");
  }

  if (Array.isArray(filters.driveTrain) && filters.driveTrain.length > 0) {
    queryParams.driveTrain = filters.driveTrain.join(",");
  }

  queryParams.pagination = filters.pagination;
  queryParams.sort = filters.sort;
  queryParams.view = filters.view;

  const queryString = encodeQueryString(queryParams);

  return queryString;
};
