import { RootState } from "store";

export const productDetailsSelector = (state: RootState) => ({
  status: state.product.status,
  product: state.product.car,
});
