import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import { NewsMainCard } from "types";

import "./mainPageNewsCard.scss";

interface MainPageNewsCardProps {
  news: NewsMainCard[];
}

export const MainPageNewsCard = ({ news }: MainPageNewsCardProps) => {
  return (
    <div className="news">
      {news.map((n) => (
        <Link to={`/article/news/${n.id}`} className="sing_news" key={n.id}>
          <OpenInNewRoundedIcon className="icon" />
          <img src={n.image} alt={n.title} className="car_image" />
          <div className="description">
            <h3>{n.title}</h3>
            <p>{n.text}</p>
          </div>
          <div className="expert">
            <Avatar src={n.expert.photo} alt={n.expert.name} />
            By <span>{n.expert.name}</span>
            <span>{n.time}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};
