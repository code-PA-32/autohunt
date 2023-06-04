import { Container } from "Components/Container";
import "./newsInfoPage.scss";
import { NewsInfo } from "features/NewsInfo";

export const NewsInfoPage = () => {
  return (
    <Container className="news_info_page">
      <NewsInfo />
    </Container>
  );
};
