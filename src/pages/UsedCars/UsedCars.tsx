import { Container } from "Components/Container";
import "./usedCars.scss";
import { SearchPanel } from "features/SearchPanel";
import { ViewPanelContainer } from "features/ViewPanel";
import { SearchCarList } from "features/SearchCarList";
import { PaginationContainer } from "features/Pagination";
export const UserCars = () => {
  return (
    <Container className="used_cars">
      <SearchPanel />
      <ViewPanelContainer />
      <SearchCarList />
      <PaginationContainer />
    </Container>
  );
};
