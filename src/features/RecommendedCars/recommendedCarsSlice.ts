import { CardCars, RecommendedCarsSlice } from "types";
import "./recommendedCars.scss";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RECOMMENDED_CARS_NEW, RECOMMENDED_CARS_USED } from "config";
import axios from "axios";

export const fetchNewRecommendedCars = createAsyncThunk<
  { data: CardCars[] },
  undefined,
  {
    state: { recommended: RecommendedCarsSlice };
  }
>(
  "cars/fetchRecommendedNew",
  async () => {
    return await axios.get(RECOMMENDED_CARS_NEW);
  },
  {
    condition: (_, { getState }) => {
      const {
        recommended: { status },
      } = getState();
      if (status === "loading") {
        return false;
      }
    },
  }
);

export const fetchUsedRecommendedCars = createAsyncThunk<
  { data: CardCars[] },
  undefined,
  {
    state: { recommended: RecommendedCarsSlice };
    rejectValue: string;
  }
>("cars/fetchRecommendedUsed", async () => {
  return await axios.get(RECOMMENDED_CARS_USED);
});

const initialState: RecommendedCarsSlice = {
  status: "idle",
  newRecommended: [],
  usedRecommended: [],
};

const recommendedCarsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchNewRecommendedCars.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNewRecommendedCars.rejected, (state) => {
        state.status = "error";
      })
      .addCase(
        fetchNewRecommendedCars.fulfilled,
        (state, action: PayloadAction<{ data: CardCars[] }>) => {
          state.status = "idle";
          state.newRecommended = action.payload.data;
        }
      )
      .addCase(fetchUsedRecommendedCars.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsedRecommendedCars.rejected, (state) => {
        state.status = "error";
      })
      .addCase(
        fetchUsedRecommendedCars.fulfilled,
        (state, action: PayloadAction<{ data: CardCars[] }>) => {
          state.status = "idle";
          state.usedRecommended = action.payload.data;
        }
      );
  },
});

export const recommendedCarsReducer = recommendedCarsSlice.reducer;
