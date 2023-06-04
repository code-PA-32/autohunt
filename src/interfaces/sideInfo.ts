import { Battery, CarDetails, Dimension, Engine } from "types";

export interface SideInfoProps {
  id: string;
  flag: boolean;
  addDeleteCompare: (id: string) => void;
  engine: Engine;
  carDetails: CarDetails;
  battery: Battery;
  dimension: Dimension;
  price: number;
  rating: {
    ratingCount: number;
    averageRating: number;
  };
}
