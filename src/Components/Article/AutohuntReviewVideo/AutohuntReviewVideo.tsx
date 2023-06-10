import { AutohuntCarDetail } from "types";

import "./autohuntReviewVideo.scss";

interface AutohuntReviewVideoProps
  extends Pick<AutohuntCarDetail, "video" | "img"> {}

export const AutohuntReviewVideo = ({
  video,
  img,
}: AutohuntReviewVideoProps) => {
  return (
    <div className="our_video">
      <video src={video} controls poster={img}></video>
    </div>
  );
};
