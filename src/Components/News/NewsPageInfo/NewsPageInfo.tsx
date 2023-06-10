import { ImageWithSpinner } from "features/ImageWithSpinner";

import "./newsPageInfo.scss";

interface NewsPageInfoProps {
  image: string;
  image2: string;
  text: string;
  text2: string;
  time: string;
  tags: string[];
  title: string;
}
export const NewsPageInfo = ({
  image,
  image2,
  text,
  time,
  text2,
  tags,
  title,
}: NewsPageInfoProps) => {
  const tagsList = tags.map((t) => <span key={t}>{t}</span>);
  return (
    <div className="news_info">
      <span className="time"> {time}</span>
      <ImageWithSpinner src={image} alt={title} />
      <p>{text}</p>
      <ImageWithSpinner src={image2} alt={title} />
      <p>{text2}</p>
      <div className="tag_list">{tagsList}</div>
    </div>
  );
};
