import { AutohuntReviewVideo } from "Components/Article/AutohuntReviewVideo";
import { useAutohuntCarDetail } from "./useAutohuntDetail";
import { AutohuntReviewDetails } from "Components/Article/AutohuntReviewDetails";
import { Dealer } from "Components/ProductDetails/Dealer";
import { ReviewDetails } from "Components/Article/ReviewDetails";
import { AutohuntReviewComments } from "Components/Article/AutohuntReviewComments";
import { AddAutohuntReview } from "Components/Article/AddCarReview";

export const AutohuntCarDetail = () => {
  const {
    car,
    logged,
    userId,
    text,
    setCommentText,
    handleSubmitComment,
    handleDeleteComment,
  } = useAutohuntCarDetail();
  return (
    <>
      <AutohuntReviewVideo video={car.video} img={car.img} />
      <ReviewDetails
        avrRating={car.avrRating}
        length={car.length}
        to
        id={car.id}
      />
      <AutohuntReviewDetails
        img={car.img}
        intro={car.intro}
        pros={car.pros}
        cons={car.cons}
        whatNew={car.whatNew}
      />
      <Dealer
        photo={car.expert.photo}
        name={car.expert.name}
        phone={car.expert.phone}
        email={car.expert.email}
        position="Expert"
      />
      <AutohuntReviewComments
        comments={car.comments}
        user={userId}
        onDeleteComment={handleDeleteComment}
      />
      <AddAutohuntReview
        text={text}
        user={logged}
        setRevComment={setCommentText}
        onSubmit={handleSubmitComment}
      />
    </>
  );
};
