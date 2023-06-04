import { RootState } from "store";

export const newsInfoSelector = (state: RootState) => ({
  newsInfo: state.newsInfo.newsInfo,
  status: state.newsInfo.status,
});
