import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { COMPARE_CARS, COMPARE_CARS_IDS } from "config";
import { Status, CardCars } from "types";

export const getCompareCars = createAsyncThunk<
  { data: CardCars[] },
  undefined,
  {
    state: { compare: CompareCars };
    rejectValue: string;
  }
>("compare/getCompareCars", async () => {
  return await axios.get(COMPARE_CARS);
});

export const getCompareByIds = createAsyncThunk<{ data: CardCars[] }, string[]>(
  "compare/getCompareByIds",
  async (list: string[]) => {
    try {
      return await axios.post(COMPARE_CARS_IDS, list);
    } catch (error) {
      throw new Error("Failed to fetch compare data");
    }
  }
);

type CompareCars = {
  status: Status;
  message: string;
  list: Array<string>;
  cars: CardCars[];
};

const initialState: CompareCars = {
  status: "idle",
  list: [],
  cars: [],
  message: "",
};

const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    addCompareCar: {
      prepare: (carId: string) => {
        return { payload: carId };
      },
      reducer: (state, action: PayloadAction<string>) => {
        if (state.list.includes(action.payload)) {
          state.list = state.list.filter((car) => car !== action.payload);
          return;
        }

        if (state.list.length === 3) {
          state.list.shift();
        }

        state.list.push(action.payload);
      },
    },
    deleteCompareCar: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((car) => car !== action.payload);
      state.cars = state.cars.filter((car) => car.id !== action.payload);
    },
    removeAllCars: () => initialState,
  },
  extraReducers(builder) {
    builder
      .addCase(getCompareCars.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCompareCars.rejected, (state) => {
        state.status = "error";
      })
      .addCase(
        getCompareCars.fulfilled,
        (state, action: PayloadAction<{ data: CardCars[] }>) => {
          state.status = "idle";
          state.cars = action.payload.data;
          state.list = action.payload.data.map((car) => car.id);
        }
      )
      .addCase(getCompareByIds.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCompareByIds.rejected, (state) => {
        state.status = "error";
        state.message = "Can't load cars";
      })
      .addCase(
        getCompareByIds.fulfilled,
        (state, action: PayloadAction<{ data: CardCars[] }>) => {
          state.status = "idle";
          state.cars = action.payload.data;
        }
      );
  },
});

export const compareReducer = compareSlice.reducer;

export const { addCompareCar, deleteCompareCar, removeAllCars } =
  compareSlice.actions;
