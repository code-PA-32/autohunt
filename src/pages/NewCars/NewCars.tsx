import { Container } from "Components/Container";
import "./newCars.scss";
import { SearchPanel } from "features/SearchPanel";
import { ViewPanelContainer } from "features/ViewPanel";
import { SearchCarList } from "features/SearchCarList";
import { PaginationContainer } from "features/Pagination";
export const NewCars = () => {
  return (
    <Container className="new_cars">
      <SearchPanel />
      <ViewPanelContainer />
      <SearchCarList />
      <PaginationContainer />
    </Container>
  );
};
