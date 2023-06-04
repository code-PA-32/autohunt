import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { GET_LIMIT_AUTOHUNT } from "config";
import { CardCars, Status } from "types";

export const getAutohuntReviewsCar = createAsyncThunk<
  { data: CardCars[] },
  undefined
>("mainAutohuntReview/getCars", async () => {
  return await axios.get(GET_LIMIT_AUTOHUNT);
});

type AppState = {
  cars: CardCars[];
  status: Status;
};

const initialState: AppState = {
  cars: [],
  status: "idle",
};

const mainPageAutohuntReviewSlice = createSlice({
  name: "mainAutohuntReview",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAutohuntReviewsCar.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        getAutohuntReviewsCar.fulfilled,
        (state, action: PayloadAction<{ data: CardCars[] }>) => {
          state.status = "idle";
          state.cars = action.payload.data;
        }
      )
      .addCase(getAutohuntReviewsCar.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const mainPageAutohuntReviewReducer =
  mainPageAutohuntReviewSlice.reducer;
