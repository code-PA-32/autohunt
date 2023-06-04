import { CompareCars } from "features/CompareCars";
import { MainPageFilters } from "features/MainPageFilters";
import { RecommendedCars } from "features/RecommendedCars";
import { MainPageSlider } from "features/MainPageSlider";
import { Container } from "Components/Container";
import { NewsReviewsSection } from "features/NewsReviewsSection";
import { AutohuntMap } from "features/AutohuntMap";
import { MainPageLogos } from "features/MainPageLogos";

export const Main = () => {
  return (
    <Container>
      <MainPageSlider />
      <MainPageFilters />
      <RecommendedCars />
      <CompareCars />
      <NewsReviewsSection />
      <AutohuntMap />
      <MainPageLogos />
    </Container>
  );
};
