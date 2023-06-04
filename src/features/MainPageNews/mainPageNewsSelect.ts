import { RootState } from "store";

export const newsSelector = (state: RootState) => ({
  news: state.news.news,
  status: state.news.status,
});
