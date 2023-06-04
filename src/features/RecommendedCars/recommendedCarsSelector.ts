import { RootState } from "store";

export const recommendedCars = (state: RootState) => ({
  status: state.recommended.status,
  newRecommended: state.recommended.newRecommended,
  usedRecommended: state.recommended.usedRecommended,
});
