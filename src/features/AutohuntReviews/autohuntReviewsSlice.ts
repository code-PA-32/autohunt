import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { GET_AUTOHUNT_REVIEWS } from "config";
import { CardCars, Status } from "types";

export const getAutohuntReviews = createAsyncThunk<
  { data: CardCars[] },
  undefined
>("autohuntReviews/getCars", async () => {
  return await axios.get(GET_AUTOHUNT_REVIEWS);
});

type AppState = {
  cars: CardCars[];
  status: Status;
};

const initialState: AppState = {
  cars: [],
  status: "idle",
};

const autohuntReviewsSlice = createSlice({
  name: "autohuntReviews",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAutohuntReviews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        getAutohuntReviews.fulfilled,
        (state, action: PayloadAction<{ data: CardCars[] }>) => {
          state.cars = action.payload.data;
          state.status = "idle";
        }
      )
      .addCase(getAutohuntReviews.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const autohuntReviewsReducer = autohuntReviewsSlice.reducer;
