import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FILTERS_DATA } from "config";
import { FiltersData } from "types/filtersData";
import { Status } from "types";
import axios from "axios";

export const getFiltersData = createAsyncThunk("filtersData/data", async () => {
  const response = await axios.get(FILTERS_DATA);
  return response.data;
});

type InitDataFilter = {
  status: Status;
} & FiltersData;

const initialState: InitDataFilter = {
  data: {
    brands: {},
    features: {},
    locations: {},
    colors: [],
    bodyType: [],
    years: [],
    drive: [],
    transmission: [],
    fuelType: [],
    batteryCapacity: [],
    chargingTime: [],
    chargingType: [],
  },
  status: "idle",
};

const filtersData = createSlice({
  name: "filtersData",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getFiltersData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getFiltersData.rejected, (state) => {
        state.status = "error";
      })
      .addCase(getFiltersData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "idle";
      });
  },
});

export const dataFilter = filtersData.reducer;
