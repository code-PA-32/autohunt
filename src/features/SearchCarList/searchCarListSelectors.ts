import { RootState } from "store";

export const searchCarListSelectors = (state: RootState) => ({
  status: state.carList.status,
  carList: state.carList.carList,
  total: state.carList.total
});
