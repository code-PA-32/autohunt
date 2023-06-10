import { useSelector } from "react-redux";
import { useEffect } from "react";

import { useAppDispatch } from "store";
import { newsSelector } from "./mainPageNewsSelect";
import { getPopularNews } from "./mainPageNewsSlice";

export const useMainPageNews = () => {
  const dispatch = useAppDispatch();
  const { news, status } = useSelector(newsSelector);

  useEffect(() => {
    if (news.length === 0) dispatch(getPopularNews());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { news, status };
};
