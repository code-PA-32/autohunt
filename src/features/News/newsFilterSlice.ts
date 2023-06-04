import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { GET_NEWS_TAGS } from "config";

export const getNewsTags = createAsyncThunk<{ data: string[] }, undefined>(
  "newsFilter/tags",
  async () => {
    return await axios.get(GET_NEWS_TAGS);
  }
);

type FiltersSlice = {
  filters: string[];
  term: string;
  tagList: string[];
};

const initialState: FiltersSlice = {
  filters: [],
  term: "",
  tagList: [],
};

const newsFilterSlice = createSlice({
  name: "newsFilters",
  initialState,
  reducers: {
    toggleTag: {
      prepare: (tag: string) => {
        return {
          payload: tag,
        };
      },
      reducer: (state, action: PayloadAction<string>) => {
        const { payload } = action;
        const index = state.filters.indexOf(payload);

        if (index === -1) {
          state.filters.push(payload);
        } else {
          state.filters.splice(index, 1);
        }
      },
    },
    setTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(
      getNewsTags.fulfilled,
      (state, action: PayloadAction<{ data: string[] }>) => {
        state.tagList = action.payload.data;
      }
    );
  },
});

export const newsFiltersReducer = newsFilterSlice.reducer;
export const { toggleTag,setTerm } = newsFilterSlice.actions;
