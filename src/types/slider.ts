import { Status } from "./status";

export type Slide = {
  id: string;
  text: string;
  image: string;
};

export type MainPageSlider = {
  status: Status;
  slides: Slide[];
};
