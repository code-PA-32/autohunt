import { useSelector } from "react-redux";
import { useAppDispatch } from "store";
import { newsSelector } from "./mainPageNewsSelect";
import { useEffect } from "react";
import { getPopularNews } from "./mainPageNewsSlice";

export const useMainPageNews = () => {
  const dispatch = useAppDispatch();
  const { news, status } = useSelector(newsSelector);

  useEffect(() => {
    dispatch(getPopularNews());
  }, []);
  console.log(news);
  return { news, status };
};
