import { RootState } from "store";

export const compareCarsSelector = (state: RootState) => ({
  list: state.compare.list,
  status: state.compare.status,
  cars: state.compare.cars,
});
