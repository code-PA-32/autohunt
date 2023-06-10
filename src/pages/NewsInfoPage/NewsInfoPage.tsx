import { Container } from "Components/Container";
import { NewsInfo } from "features/NewsInfo";

import "./newsInfoPage.scss";

export const NewsInfoPage = () => {
  return (
    <Container className="news_info_page">
      <NewsInfo />
    </Container>
  );
};
