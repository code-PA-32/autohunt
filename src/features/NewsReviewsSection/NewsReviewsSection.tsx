import { MainPageNews } from "features/MainPageNews";
import { useNewsReviewsSection } from "./useNewsReviewsSection";
import { MainPageAutohuntReview } from "features/MainPageAutohuntReview";
import "./newsReviewsSection.scss";

export const NewsReviewsSection = () => {
  const { news, handelSetNews, handleSetReviews } = useNewsReviewsSection();

  return (
    <div className="news_reviews">
      <h2>{news ? "News" : "Reviews"}</h2>
      <div className="switcher">
        <button
          onClick={handelSetNews}
          className={news ? "new_active" : "fade_btn"}
        >
          News
        </button>
        <button
          onClick={handleSetReviews}
          className={!news ? "rev_active" : "fade_btn"}
        >
          Reviews
        </button>
      </div>

      {news ? <MainPageNews /> : <MainPageAutohuntReview />}
    </div>
  );
};
