import { NewsPageCard } from "types";
import { NewsCard } from "../NewsCard";

import "./newsList.scss";

interface NewsListProps {
  news: NewsPageCard[];
  status: string;
  isSelected: (tag:string) => boolean
}

export const NewsList = ({ news, status, isSelected }: NewsListProps) => {
  if (status === "loading") {
    return <div></div>;
  }
  const cards = news.map((n) => <NewsCard {...n} key={n.id} isSelected={isSelected} />);

  return <div className="news_list">{cards}</div>;
};
