import { ReviewDetails } from "Components/Article/ReviewDetails";
import { useCarReviewDetails } from "./useCarReviewDetails";
import { ProductSlider } from "Components/ProductDetails/Slider";
import { CarReviewComments } from "Components/Article/CarReviewComments";
import { AddCarReview } from "Components/Article/AddCarReview";

export const CarReviewDetails = () => {
  const {
    car,
    setRating,
    onSubmitComment,
    onDeleteComment,
    revRating,
    setRevComment,
    comment,
    userId,
    goPrev,
    goNext,
    goToSlide,
    logged,
    currentIndex,
    length,
  } = useCarReviewDetails();
  return (
    <>
      <ProductSlider
        images={car.src}
        currentIndex={currentIndex}
        goToSlide={goToSlide}
        goNext={goNext}
        goPrev={goPrev}
        views={null}
      />
      <ReviewDetails avrRating={car.avrRating} length={length} />
      <CarReviewComments
        rating={car.rating}
        deleteComment={onDeleteComment}
        user={userId}
      />
      <AddCarReview
        onSubmit={onSubmitComment}
        user={logged}
        rating={revRating}
        setRating={setRating}
        comment={comment}
        setRevComment={setRevComment}
      />
    </>
  );
};
