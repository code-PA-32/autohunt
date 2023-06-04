import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CardCars, Status } from "types";
import axios from "axios";
import { GET_REVIEW_CARS } from "config";

export const getReviewCars = createAsyncThunk<
  { data: { cars: CardCars[]; total: number } },
  { brand: string | null; model: string | null; pagination: number }
>(
  "carReviews/getCars",
  async (data: {
    brand: string | null;
    model: string | null;
    pagination: number;
  }) => {
    return await axios.post(GET_REVIEW_CARS, data);
  }
);

type CarReviewsSlice = {
  cars: CardCars[];
  status: Status;
  brand: string | null;
  model: string | null;
  pagination: number;
  total: number;
};

const initialState: CarReviewsSlice = {
  cars: [],
  status: "idle",
  brand: null,
  model: null,
  pagination: 1,
  total: 0,
};

const carReviewsSlice = createSlice({
  name: "carReviews",
  initialState,
  reducers: {
    setBrand: (state, action: PayloadAction<string | null>) => {
      state.brand = action.payload;
    },
    setModel: (state, action: PayloadAction<string | null>) => {
      state.model = action.payload;
    },
    setPagination: (state, action: PayloadAction<number>) => {
      state.pagination = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getReviewCars.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        getReviewCars.fulfilled,
        (
          state,
          action: PayloadAction<{ data: { cars: CardCars[]; total: number } }>
        ) => {
          state.status = "idle";
          state.cars = action.payload.data.cars;
          state.total = action.payload.data.total;
        }
      )
      .addCase(getReviewCars.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const carReviewsReducer = carReviewsSlice.reducer;
export const { setBrand, setModel, setPagination } = carReviewsSlice.actions;
