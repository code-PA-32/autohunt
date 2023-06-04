import { RootState } from "store";

export const mainSliders = (state: RootState) => ({
  status: state.slides.status,
  slides: state.slides.slides,
});
