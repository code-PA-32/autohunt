import { RootState } from "store";

export const carFiltersSelector = (state: RootState) => ({
  filters: state.filter,
});
