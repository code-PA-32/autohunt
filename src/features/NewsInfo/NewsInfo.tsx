import { NewsPageInfo } from "Components/News/NewsPageInfo";
import { useNewsInfo } from "./useNewsInfo";
import { Dealer } from "Components/ProductDetails/Dealer";
import { NewsInfoComments } from "Components/News/NewsInfoComment";
import { AddNewsComment } from "Components/News/AddNewsComment";

export const NewsInfo = () => {
  const {
    newsInfo,
    status,
    user,
    logged,
    handleSetNewsText,
    newsText,
    handleAddComment,
    handleDeleteComment,
  } = useNewsInfo();
  return (
    <>
      <NewsPageInfo
        image={newsInfo.image}
        image2={newsInfo.image2}
        text={newsInfo.text}
        text2={newsInfo.text2}
        time={newsInfo.time}
        tags={newsInfo.tags}
        title={newsInfo.title}
      />
      <Dealer position="Expert" {...newsInfo.expert} />
      <NewsInfoComments
        comments={newsInfo.comments}
        user={user.userId}
        onDeleteComment={handleDeleteComment}
      />
      <AddNewsComment
        text={newsText}
        user={logged}
        setRevComment={handleSetNewsText}
        onSubmit={handleAddComment}
      />
    </>
  );
};
