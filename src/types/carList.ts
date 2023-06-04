import { CardCars, Cars } from "./cars";
import { Status } from "./status";

export type CarListSlice = {
  status: Status;
  carList: CardCars[];
  total: number;
};
