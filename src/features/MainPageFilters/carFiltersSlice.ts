import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FilterSlice } from "types";

const initialState: FilterSlice = {
  term: "",
  condition: "",
  brand: null,
  model: [],
  price: [0, 300000],
  year: [],
  bodyType: [],
  transmission: [],
  fuelType: [],
  passengers: [],
  color: [],
  driveTrain: [],
  pagination: 1,
  location: [],
  sort: "priceLow",
  view: "grid",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload;
    },
    setView: (state, action: PayloadAction<string>) => {
      state.view = action.payload;
    },
    setSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },
    setCondition: (state, action: PayloadAction<boolean | string>) => {
      state.condition = action.payload;
    },
    setBrand: (state, action: PayloadAction<string>) => {
      state.brand = action.payload;
    },
    setPrice: (state, action: PayloadAction<number | number[]>) => {
      state.price = action.payload;
    },
    setYear: (state, action: PayloadAction<string[]>) => {
      state.year = action.payload;
    },
    setBody: (state, action: PayloadAction<string[]>) => {
      state.bodyType = action.payload;
    },
    setTransmission: (state, action: PayloadAction<string[]>) => {
      state.transmission = action.payload;
    },
    setPass: (state, action: PayloadAction<string[]>) => {
      state.passengers = action.payload;
    },
    setColor: (state, action: PayloadAction<string[]>) => {
      state.color = action.payload;
    },
    setDriveTrain: (state, action: PayloadAction<string[]>) => {
      state.driveTrain = action.payload;
    },
    setLocation: (state, action: PayloadAction<string[]>) => {
      state.location = action.payload;
    },
    setFuel: (state, action: PayloadAction<string[]>) => {
      state.fuelType = action.payload;
    },
    setModel: (state, action: PayloadAction<string[]>) => {
      state.model = action.payload;
    },
    setPagination: (state, action: PayloadAction<number>) => {
      state.pagination = action.payload;
    },
    init: () => initialState,
  },
});

export const filterReducer = filtersSlice.reducer;

export const {
  setBody,
  setBrand,
  setColor,
  setCondition,
  setDriveTrain,
  setModel,
  setPass,
  setPrice,
  setTerm,
  setTransmission,
  setYear,
  setLocation,
  setPagination,
  setFuel,
  setSort,
  setView,
  init,
} = filtersSlice.actions;
