import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MainPageSlider, Slide } from "types";
import { SLIDES_DATA } from "config";
import axios from "axios";

export const getMainSlides = createAsyncThunk<
  { data: Slide[] },
  undefined,
  {
    state: { slides: MainPageSlider };
  }
>(
  "slides/getSlides",
  async () => {
    return await axios.get(SLIDES_DATA);
  },
  {
    condition: (_, { getState }) => {
      const {
        slides: { status },
      } = getState();
      if (status === "loading") {
        return false;
      }
    },
  }
);

const initialState: MainPageSlider = {
  status: "idle",
  slides: [],
};

const mainSlidesSlice = createSlice({
  name: "slides",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getMainSlides.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMainSlides.rejected, (state) => {
        state.status = "error";
      })
      .addCase(
        getMainSlides.fulfilled,
        (state, action: PayloadAction<{ data: Slide[] }>) => {
          state.status = "idle";
          state.slides = action.payload.data;
        }
      );
  },
});

export const sliderReducer = mainSlidesSlice.reducer;
