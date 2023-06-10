import { useSelector } from "react-redux";

import { useAppDispatch } from "store";
import { newsPageSelector } from "./newsSelector";
import { ChangeEvent, FormEvent, useEffect } from "react";
import { getAllNews } from "./newsSlice";
import { newsFilterSelector } from "./newsFilterSelector";
import { getNewsTags, setTerm, toggleTag } from "./newsFilterSlice";

export const useNews = () => {
  const dispatch = useAppDispatch();
  const { news, status } = useSelector(newsPageSelector);
  const { filters, term, tags } = useSelector(newsFilterSelector);

  useEffect(() => {
    dispatch(getAllNews({ tags: filters, term }));
    dispatch(getNewsTags());
  }, [dispatch, filters]);


  const toggleTags = (tag: string) => {
    dispatch(toggleTag(tag));
  };

  const isSelected = (tag: string) => {
    return filters.includes(tag);
  };

  const handleSetTerm = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setTerm(e.target.value));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(getAllNews({ tags: filters, term }));
  };
  return {
    news,
    status,
    term,
    filters,
    toggleTags,
    tags,
    isSelected,
    handleSetTerm,handleSubmit
  };
};
