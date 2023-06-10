import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import InsertCommentRoundedIcon from "@mui/icons-material/InsertCommentRounded";
import { Dealer } from "types";
import { ImageWithSpinner } from "features/ImageWithSpinner";

import "./newsCard.scss";

interface NewsCardProps {
  image: string;
  time: string;
  title: string;
  text: string;
  tags: string[];
  expert: Dealer;
  length: number;
  id: string;
  isSelected: (tag: string) => boolean;
}

export const NewsCard = ({
  image,
  time,
  title,
  text,
  id,
  tags,
  expert,
  length,
  isSelected,
}: NewsCardProps) => {
  const tag = tags.map((t) => (
    <span key={t} className={isSelected(t) ? "selected" : ""}>
      {t}
    </span>
  ));

  return (
    <Link to={`/article/news/${id}`} className="news_card">
      <span className="time">{time}</span>
      <ImageWithSpinner src={image} alt={title} />
      <div className="info">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="tags">{tag}</div>
      <div className="card_footer">
        <Avatar src={expert.photo} /> By{" "}
        <span className="name">{expert.name}</span>
        <span className="comments">
          <InsertCommentRoundedIcon sx={{ fontSize: "20px" }} /> {length}
        </span>
      </div>
    </Link>
  );
};
