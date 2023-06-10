import { PaginationContainer } from "features/Pagination";
import { SearchCarList } from "features/SearchCarList";
import { SearchPanel } from "features/SearchPanel";
import { ViewPanelContainer } from "features/ViewPanel";
import { Container } from "Components/Container";

import "./newCars.scss";

export const SearchResults = () => {
  return (
    <Container className="search-results">
      <SearchPanel />
      <ViewPanelContainer />
      <SearchCarList />
      <PaginationContainer />
    </Container>
  );
};
