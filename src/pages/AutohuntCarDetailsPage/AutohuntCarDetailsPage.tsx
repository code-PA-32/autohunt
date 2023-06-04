import { Container } from "Components/Container";
import { AutohuntCarDetail } from "features/AutohuntCarDetail";
import "./autohuntCarDetailsPage.scss";

export const AutohuntCarDetailsPage = () => {
  return (
    <Container className="autohunt_details">
      <AutohuntCarDetail />
    </Container>
  );
};
