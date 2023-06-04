import { RootState } from "store";

export const mainPageLogosSelector = (state: RootState) => ({
  logos: state.pageLogos.logos,
  status: state.pageLogos.status,
});
