export type FilterSlice = {
  term: string;
  condition: boolean | string;
  brand: string | null;
  model: string[];
  price: number | number[];
  year: string[];
  bodyType: string[];
  transmission: string[];
  fuelType: string[];
  passengers: string[];
  color: string[];
  driveTrain: string[];
  pagination: number;
  location: string[];
  sort: string,
  view: string
};
