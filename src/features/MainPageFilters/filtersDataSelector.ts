import { RootState } from "store";

export const filterDataSelector = (state: RootState) => ({
  filterData: state.filterData.data,
  status: state.filterData.status,
});
