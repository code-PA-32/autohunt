import { Container } from "Components/Container";
import "./newsPage.scss";
import { News } from "features/News";

export const NewsPage = () => {
  return (
    <Container className="news_page">
      <News />
    </Container>
  );
};
