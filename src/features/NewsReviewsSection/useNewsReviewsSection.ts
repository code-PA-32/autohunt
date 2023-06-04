import { useState } from "react";

export const useNewsReviewsSection = () => {
  const [news, setNews] = useState(true);

  const handelSetNews = () => {
    setNews(true);
  };
  const handleSetReviews = () => {
    setNews(false);
  };

  return {
    news,
    handelSetNews,
    handleSetReviews,
  };
};
