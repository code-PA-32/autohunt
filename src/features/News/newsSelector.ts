import { RootState } from "store";

export const newsPageSelector = (state: RootState) => ({
  news: state.newsPage.news,
  status: state.newsPage.status,
});
