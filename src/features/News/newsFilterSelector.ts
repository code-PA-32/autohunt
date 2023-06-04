import { RootState } from "store";

export const newsFilterSelector = (state: RootState) => ({
  filters: state.newsFilter.filters,
  term: state.newsFilter.term,
  tags: state.newsFilter.tagList,
});
