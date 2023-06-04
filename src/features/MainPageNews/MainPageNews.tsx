import { MainPageNewsCard } from "Components/MainPageNewsCard";
import { useMainPageNews } from "./useMainPageNews";

export const MainPageNews = () => {
  const { news } = useMainPageNews();
  return <>
    <MainPageNewsCard news={news} />
  </>;
};
