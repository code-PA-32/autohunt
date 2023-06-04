import { RootState } from "store";

export const autohuntCarDetailsSelector = (state: RootState) => ({
  car: state.autohuntCarDetails.car,
  status: state.autohuntCarDetails.status,
});
