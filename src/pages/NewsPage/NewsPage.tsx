import { Container } from "Components/Container";
import { News } from "features/News";

import "./newsPage.scss";

export const NewsPage = () => {
  return (
    <Container className="news_page">
      <News />
    </Container>
  );
};
