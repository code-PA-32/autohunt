import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import type { CarListSlice, CardCars, FilterSlice } from "types";
import { GET_CAR_LIST } from "config";
import axios from "axios";

export const getCarList = createAsyncThunk<
  { data: { cars: CardCars[]; total: number } },
  string
>("carList/getCarList", async (filters: string) => {
  try {
    const response = await axios.get(GET_CAR_LIST(filters));
    return { data: response.data };
  } catch (error) {
    console.log(error);
    return { data: { cars: [], total: 0 } };
  }
});

const initialState: CarListSlice = {
  status: "idle",
  carList: [],
  total: 0,
};

const carListSlice = createSlice({
  name: "carList",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCarList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCarList.rejected, (state) => {
        state.status = "error";
      })
      .addCase(
        getCarList.fulfilled,
        (
          state,
          action: PayloadAction<{ data: { cars: CardCars[]; total: number } }>
        ) => {
          state.status = "idle";
          state.carList = action.payload.data.cars;
          state.total = action.payload.data.total;
        }
      );
  },
});

export const carListReducer = carListSlice.reducer;
